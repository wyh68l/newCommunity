<template>
  <view class="tabs">
    <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
      <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index"
            @click="ontabtap(index)">
        <text class="uni-tab-item-title" :class="indexTabIndex===index ? 'uni-tab-item-title-active' : ''" v-if="type === 'index'">{{tab.name}}</text>
        <text class="uni-tab-item-title" :class="newsTabIndex===index ? 'uni-tab-item-title-active' : ''" v-if="type === 'news'">{{tab.name}}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
    export default {
        data() {
            return {
                indexTabIndex: 0,
                newsTabIndex:0,
                path:'',
                type: null
            }
        },
        props:{
            tabBars:{
                default(){
                    return []
                },
                type:Array
            }
        },
        created() {
            this.init();
            //this.changeTabIndex();
        },
        updated(){

        },
        methods: {
            init(){
                this.path = this.$route.meta.pagePath;
                if(this.path.indexOf('/index') !== -1){
                    this.type = 'index'
                    //获取首页内容滑块改变的下标
                    this.$bus.$on('indexChangeTabIndex', (res) => {
                        this.indexTabIndex = res;
                    })
                }else if(this.path.indexOf('/news') !== -1){
                    this.type = 'news'
                    //获取首页内容滑块改变的下标
                    this.$bus.$on('newsChangeTabIndex', (res) => {
                        this.newsTabIndex = res;
                    })
                }
            },
            ontabtap(index) {
                if(this.path.indexOf('/index') !== -1){
                    this.indexTabIndex = index;
                    this.$bus.$emit('indexTabIndex', index);
                }else if(this.path.indexOf('/news') !== -1){
                    this.newsTabIndex = index;
                    this.$bus.$emit('newsTabIndex', index);
                }
            },
        }
    }
</script>

<style lang="less">
  @import '../../common/public_css/base.less';

  .scroll-h {
    /*width: 750upx;*/
    /*height: 80upx;*/
    flex-direction: row;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
    /* flex-wrap: nowrap; */
    /* border-color: #cccccc;
		border-bottom-style: solid;
		border-bottom-width: 1px; */
  }

  .line-h {
    height: 1upx;
    background-color: #cccccc;
  }

  .uni-tab-item {
    /* #ifndef APP-PLUS */
    display: inline-block;
    /* #endif */
    flex-wrap: nowrap;
    padding-left: 34upx;
    padding-right: 34upx;
  }

  .uni-tab-item-title {
    color: #555;
    font-size: 30upx;
    height: 80upx;
    line-height: 80upx;
    flex-wrap: nowrap;
    /* #ifndef APP-PLUS */
    white-space: nowrap;
    /* #endif */
  }

  .uni-tab-item-title-active {
    color: @color-theme;
    border-bottom: 2px solid @color-theme;
    border-radius: 4%;
  }

  .swiper-box {
    flex: 1;
  }

  .swiper-item {
    flex: 1;
    flex-direction: row;
  }

  .scroll-v {
    flex: 1;
    /* #ifndef MP-ALIPAY */
    flex-direction: column;
    /* #endif */
    width: 750upx;
  }
</style>
