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

    <ContentSwiper :tabIndex='tabIndex' :swiperNewsList="swiperNewsList"></ContentSwiper>
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
                swiperNewsList: {
                    attentionList: [
                        {
                            id: '1',
                            icon: '../../static/images/ck17.png',
                            userName: '吴彦祖',
                            address: '广州天河区',
                            contentType: 'share',
                            shareTitle: '为何你还单身？还不是因为你丑，又没钱',
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
                        {//文本加图片
                            id: '2',
                            icon: '../../static/images/ck17.png',
                            userName: '权志龙',
                            address: '广州天河区',
                            contentType: 'img',
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
                        {//分享链接
                            id: '3',
                            icon: '../../static/images/ck17.png',
                            userName: '权志龙',
                            address: '广州天河区',
                            contentType: 'share',
                            shareTitle: '为何你还单身？还不是因为你丑，又没钱',
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
                        {//纯文本
                            id: '4',
                            icon: '../../static/images/ck17.png',
                            userName: '权志龙',
                            address: '广州天河区',
                            contentType: 'default',
                            focus: false,
                            title: '这是标题哦',
                            contentText: '为何你还单身？还不是因为你丑，又没钱为何你还单身？还不是因为你丑，又没钱为何你还单身？还不是因为你丑，又没钱',
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
                    ],
                    topicList: [
                        {
                            id:1,
                            icon:'../../static/images/9.jpeg',
                            title:'健身记录',
                            shortTitle:'从120斤到90斤，我的反转人生',
                            active:504,
                            today:600
                        },
                        {
                            id:2,
                            icon:'../../static/images/10.jpeg',
                            title:'亲身经历过的灵异事件',
                            shortTitle:'走出去，才发现你和别人差的不止一点点',
                            active:750,
                            today:632
                        },
                        {
                            id:3,
                            icon:'../../static/images/11.jpeg',
                            title:'面试技巧',
                            shortTitle:'如何走上人生巅峰，迎娶白富美',
                            active:1002,
                            today:820
                        },
                        {
                            id:4,
                            icon:'../../static/images/12.jpeg',
                            title:'直男不配拥有爱情吗',
                            shortTitle:'为什么现在年轻人不想谈恋爱',
                            active:1504,
                            today:1200
                        }
                    ]
                },
            }
        },
        methods: {
            getTabIndex(res) {
                this.tabIndex = res;
            },
            goTo(type) {
                if (type === 'sign') {

                } else if (type === 'release') {
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
      /deep/ .uni-navbar__content .uni-navbar__content_view {
        justify-content: center;
      }

      /deep/ .uni-tab-item-title {
        color: #fff;
      }

      /deep/ .uni-tab-item-title-active {
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
