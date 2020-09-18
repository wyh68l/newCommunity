<template>
  <view class="page">
    <view class="uni-tab-bar">
      <!-- :current为uniapp内置属性，意思是设置当前的滑块的下标-->
      <swiper class="swiper-box" :style="{'height':scrollHeight+'px'}" :current="type === 'index'?indexTabIndex:newsTabIndex" @change="changeTabIndex">

        <!--首页-->
        <swiper-item v-for="(item,index) in swiperList" :key="index" v-if="type === 'index'">


          <!-- @scrolltolower为uniapp的触底事件-->
          <scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(index)">
            <IndexList :indexList='item.indexList'></IndexList>
          </scroll-view>
        </swiper-item>


        <!--趣事-->
        <swiper-item v-if="type === 'news'">
          <!-- @scrolltolower为uniapp的触底事件-->
          <scroll-view scroll-y="true" class="list">
            <newsList :attentionList='swiperNewsList.attentionList' ></newsList>
          </scroll-view>

        </swiper-item>

        <swiper-item v-if="type === 'news'">
          <!-- @scrolltolower为uniapp的触底事件-->
          <scroll-view scroll-y="true" class="list" >
            <view class="search">
              <input type="text" class="uni-input" placeholder="搜索内容" placeholder-class="topic-search uni-page-head-search-placeholder">
            </view>
            <topicList :topicList='swiperNewsList.topicList'></topicList>
          </scroll-view>

        </swiper-item>

        <swiper-item v-if="type === 'paper'">
          <!-- @scrolltolower为uniapp的触底事件-->
          <scroll-view scroll-y="true" class="list" >
            <chatList :list="list"></chatList>
          </scroll-view>

        </swiper-item>

      </swiper>
    </view>
  </view>
</template>

<script>
    import IndexList from '../index/IndexList/IndexList.vue'
    import newsList from "../index/IndexList/newsList";
    import topicList from "../index/IndexList/topicList";
    import chatList from "../../pages/paper/chatList";

    export default {
        data() {
            return {
                scrollHeight: 0,
                indexTabIndex: 0,
                newsTabIndex: 0,
                path: '',
                type: ''
            }
        },
        props: {
            swiperList: {
                default() {
                    return []
                },
                type: Array
            },
            swiperNewsList: {
                default() {
                    return {}
                },
                type: Object
            },
            list:{
                default(){
                    return []
                },
                type:Array
            }
        },
        created() { //这是uniapp中的生命周期函数，表示刚创建页面，和created类似
            this.getScrollHeight();
            this.init();
        },
        computed: {},
        methods: {
            init() {
                 this.path = this.$route?this.$route.meta.pagePath:getCurrentPages()[0].route;
                if (this.path.indexOf('/index') !== -1) {
                    this.type = 'index';
                    this.$bus.$on('indexTabIndex', (res) => {
                        this.indexTabIndex = res;
                    })
                } else if (this.path.indexOf('/news') !== -1) {
                    this.type = 'news';
                    this.$bus.$on('newsTabIndex', (res) => {
                        this.newsTabIndex = res;
                    })
                } else if (this.path.indexOf('/paper') !== -1) {
                    this.type = 'paper';
                }
            },
            getScrollHeight() {
                //uni.getSystemInfo为uniapp的内置方法，用于获取系统的信息
                uni.getSystemInfo({
                    success: (res) => {
                        // console.log(res.windowHeight); //获取窗口高度
                        //uni.upx2px(100)将100px转化为upx，因为要减去顶部导航栏的距离
                        let height = res.windowHeight - uni.upx2px(80);
                        this.scrollHeight = height;
                    }
                })
            },
            changeTabIndex(e) {
                //e.detail.current获取当前滑块的下标
                //使用事件总线的方法来进行组件间的通信
                if (this.path.indexOf('/index') !== -1) {
                    this.$bus.$emit('indexChangeTabIndex', e.detail.current);
                } else if (this.path.indexOf('/news') !== -1) {
                    this.$bus.$emit('newsChangeTabIndex', e.detail.current);
                }
            },
            //上拉加载更多
            loadMore(index) {
                let last = this.swiperList[index].indexList.length - 1;
                let item = this.swiperList[index].indexList[last];
                if (item.loadMore === false) {
                    item.loadMore = 'more';
                    setTimeout(() => {
                        let temp = {
                            id: '2',
                            icon: '../../static/images/ck16.png',
                            userName: '权志龙',
                            focus: true,
                            title: '这是标题哦',
                            content: '../../static/images/rain.jpg',
                            praise: 100,
                            low: 50,
                            comments: 20,
                            share: 30,
                            isPraise: false,
                            isLow: true,
                            isComment: false,
                            isShare: true,
                            loadMore: true
                        };
                        this.swiperList[index].indexList.push(temp)
                        item.loadMore = false;
                    }, 1000)
                } else if (item.loadMore === true) {
                    item.loadMore = 'noMore';
                }
            }
        },
        components: {
            IndexList,
            newsList,
            topicList,
            chatList
        }
    }
</script>

<style lang="less">
  .page {
    /deep/ .uni-tab-bar .list {
      width: 100% !important;
    }

    .search {
      border: 1px solid #f0f0f0;
      height: 70upx;
      font-size: 28upx;
      color: #666666;
      margin: 20upx;
      border-radius: 10upx;

      input {
        background-color: #f6f6f6;
        height: 70upx;
        border-radius: 10upx;
        padding-left: 20upx;
      }

      .topic-search {
        text-align: center;
      }

      .uni-page-head-search-placeholder:before {
        left: 33%;
        font-size: 28upx;
      }
    }
  }
</style>
