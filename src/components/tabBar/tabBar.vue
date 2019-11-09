<template>
  <view class="tabs">
    <scroll-view id="tab-bar" class="scroll-h" :scroll-x="true" :show-scrollbar="false">
      <view v-for="(tab,index) in tabBars" :key="tab.id" class="uni-tab-item" :id="tab.id" :data-current="index" @click="ontabtap(index)">
        <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        tabIndex: 0,
        tabBars: [{
          name: '关注',
          id: 'guanzhu'
        }, {
          name: '推荐',
          id: 'tuijian'
        }, {
          name: '体育',
          id: 'tiyu'
        }, {
          name: '热点',
          id: 'redian'
        }, {
          name: '财经',
          id: 'caijing'
        }, {
          name: '娱乐',
          id: 'yule'
        }, {
          name: '军事',
          id: 'junshi'
        }, {
          name: '历史',
          id: 'lishi'
        }, {
          name: '本地',
          id: 'bendi'
        }]
      }
    },
    created(){
      //获取首页内容滑块改变的下标
      this.$bus.$on('changeTabIndex',(res) =>{
         this.tabIndex = res;
      })
    },
    methods: {
      ontabtap(index) {
        this.tabIndex = index;
        this.$emit('tabIndex',index);
      },
    }
  }
</script>

<style lang="less">
  @import '../../common/public_css/base.less';
  .scroll-h {
    width: 750upx;
    height: 80upx;
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
