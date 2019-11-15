<template>
  <view class="page">
    <view class="nav">
      <!-- 引入官方的导航栏-->
      <uni-nav-bar color="#fff" :statusBar='true'>
        <view slot="left" class="iconfont icon iconqiandao" @tap="goTo('sign')"></view>
        <TabBar @tabIndex='getTabIndex' :tabBars="tabBars"></TabBar>
        <view slot="right" class="iconfont icon iconbianji" @tap="goTo('release')"></view>
      </uni-nav-bar>
    </view>
    <ContentSwiper :tabIndex='tabIndex' :swiperList="swiperList"></ContentSwiper>
  </view>
</template>

<script>
    import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
    import TabBar from '../../components/tabBar/tabBar.vue'
    import ContentSwiper from '../../components/ContentSwiper/ContentSwiper.vue'

    export default {
        data() {
            return {
                tabBars: [
                    {
                        name: '关注',
                        id: 'guanzhu'
                    },
                    {
                        name: '话题',
                        id: 'huti'
                    }
                ],
                tabIndex: 0,
                swiperList: [
                    {
                        indexList: [{
                            id: '1',
                            icon: '../../static/images/ck17.png',
                            userName: '吴彦祖',
                            address:'广州天河区',
                            contentType:'share',
                            shareTitle:'为何你还单身？还不是因为你丑，又没钱',
                            focus: false,
                            title: '这是标题哦',
                            content: '../../static/images/qi1.jpg',
                            praise: 100,
                            low: 50,
                            comments: 20,
                            share: 30,
                            isPraise: false,
                            isLow: true,
                            isComment: false,
                            isShare: true,
                            loadMore: false
                        },
                            {
                                id: '2',
                                icon: '../../static/images/ck17.png',
                                userName: '权志龙',
                                address:'广州天河区',
                                contentType:'share',
                                shareTitle:'为何你还单身？还不是因为你丑，又没钱',
                                focus: false,
                                title: '这是标题哦',
                                content: '../../static/images/qi1.jpg',
                                praise: 100,
                                low: 50,
                                comments: 20,
                                share: 30,
                                isPraise: false,
                                isLow: true,
                                isComment: false,
                                isShare: true,
                                loadMore: false
                            },
                        ]
                    },
                    {
                        indexList: [{
                            id: '1',
                            icon: '../../static/images/ck17.png',
                            userName: '权志龙',
                            address:'广州天河区',
                            contentType:'default',
                            shareTitle:'为何你还单身？还不是因为你丑，又没钱',
                            focus: false,
                            title: '这是标题哦',
                            content: '../../static/images/qi1.jpg',
                            praise: 100,
                            low: 50,
                            comments: 20,
                            share: 30,
                            isPraise: false,
                            isLow: true,
                            isComment: false,
                            isShare: true,
                            loadMore: false
                        },
                            {
                                id: '2',
                                icon: '../../static/images/ck17.png',
                                userName: '权志龙',
                                address:'广州天河区',
                                contentType:'default',
                                shareTitle:'为何你还单身？还不是因为你丑，又没钱',
                                focus: false,
                                title: '这是标题哦',
                                content: '../../static/images/qi1.jpg',
                                praise: 100,
                                low: 50,
                                comments: 20,
                                share: 30,
                                isPraise: false,
                                isLow: true,
                                isComment: false,
                                isShare: true,
                                loadMore: false
                            },
                        ]
                    },
                ],
            }
        },
        methods: {
            getTabIndex(res) {
                this.tabIndex = res;
            },
            goTo(type){
                if(type === 'sign'){

                }else if(type === 'release'){
                    uni.navigateTo({
                        url: '../index/release'
                    })
                }
            }
        },
        components: {
            uniNavBar,
            TabBar,
            ContentSwiper
        }
    }
</script>

<style scoped lang="less">
  .page {
    .nav {
      /deep/ .uni-navbar__content .uni-navbar__content_view{
        justify-content: center;
      }

      /deep/ .uni-tab-item-title{
        color: #fff;
      }
      /deep/ .uni-tab-item-title-active{
        color: #fff;
        border-bottom: 2px solid #fff;
      }

      .iconqiandao {
        font-size: 32px;
      }

      .iconbianji {
        font-size: 32px;
      }
    }
  }

</style>
