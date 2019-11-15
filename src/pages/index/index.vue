<template>
  <view class="content">
    <TabBar :tabBars="tabBars"></TabBar>
    <ContentSwiper :swiperList="swiperList" ></ContentSwiper>
  </view>
</template>

<script>
    import IndexList from '../../components/index/IndexList/IndexList.vue'
    import TabBar from '../../components/tabBar/tabBar.vue'
    import ContentSwiper from '../../components/ContentSwiper/ContentSwiper.vue'

    export default {
        data() {
            return {
                title: 'Hello',
                animate: false,
                tabBars: [
                    {
                        name: '关注',
                        id: 'guanzhu'
                    },
                    {
                        name: '推荐',
                        id: 'tuijian'
                    },
                    {
                        name: '体育',
                        id: 'tiyu'
                    },
                    {
                        name: '热点',
                        id: 'redian'
                    },
                    {
                        name: '财经',
                        id: 'caijing'
                    },
                    {
                        name: '娱乐',
                        id: 'yule'
                    }, {
                        name: '军事',
                        id: 'junshi'
                    },
                    {
                        name: '历史',
                        id: 'lishi'
                    },
                    {
                        name: '本地',
                        id: 'bendi'
                    }],
                swiperList: [
                    {
                        indexList: [{
                            id: '1',
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
                            loadMore: false
                        },
                            {
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
                                loadMore: false
                            },
                        ]
                    },
                    {
                        indexList: [{
                            id: '1',
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
                            loadMore: false
                        },
                            {
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
                                loadMore: false
                            },
                        ]
                    },
                    {},
                    {},
                    {},
                    {}
                ],
            }
        },
        onLoad() {

        },
        //监听原声导航栏点击事件
        onNavigationBarButtonTap(e) {
            if (e.index === 1) { //判断是不是第二个按钮点击的
                uni.navigateTo({
                    url: './release'
                })
            } else if (e.index === 0) { //判断是不是第一个按钮点击的
                // uni.navigateTo({
                //   url: '../../components/seach/seach'
                // })
            }
        },
        /* onNavigationBarSearchInputClicked监听原生的搜索框点击事件*/
        onNavigationBarSearchInputClicked() {
            uni.navigateTo({
                url: '../../components/seach/seach'
            })
        },
        created() {

        },
        methods: {

        },
        components: {
            IndexList,
            TabBar,
            ContentSwiper
        }
    }
</script>

<style scoped lang="less">
  .content {
    .item {
      width: 200 upx;
      height: 200 upx;
      background-color: #000;
      margin-top: 50 upx;
    }

    .hoverItem {
      background-color: red;
    }
  }
</style>
