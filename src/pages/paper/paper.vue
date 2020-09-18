<template>
	<view class="page">
    <view class="nav">
      <!-- 引入官方的导航栏-->
      <uni-nav-bar color="#fff" :statusBar='true'>
        <view slot="left" class="iconfont icon iconyonghuxinxi" @tap="goTo('sign')"></view>
        <view>小纸条</view>
        <view slot="right" class="iconfont icon iconjiahao" @tap="goTo('release')"></view>
      </uni-nav-bar>
    </view>

    <ContentSwiper :list="chatList"></ContentSwiper>
	</view>
</template>

<script>
    import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
    import TabBar from '../../components/tabBar/tabBar.vue'
    import ContentSwiper from "../../components/ContentSwiper/ContentSwiper";
    export default {
      data() {
        return {
            chatList:[
                {
                    id:1,
                    icon:'../../static/images/ck17.png',
                    nickName:'吴亦凡',
                    title:'你看这碗面它又长又宽，就像这个碗它又大又圆',
                    time:'13:35',
                    flag:true,
                    num:2
                },
                {
                    id:2,
                    icon:'../../static/images/ck16.png',
                    nickName:'蔡徐坤',
                    title:'我喜欢唱，跳，rap，篮球，music~',
                    time:'13:40',
                    flag:true,
                    num:1
                },
                {
                    id:3,
                    icon:'../../static/images/ck17.png',
                    nickName:'陈冠希',
                    title:'我叫陈冠希你跟我念一遍，再大声点，我听不见',
                    time:'14:21',
                    flag:true,
                    num:1
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
                {
                    id:4,
                    icon:'../../static/images/ck16.png',
                    nickName:'古天乐',
                    title:'大家好，我叫古田罗，系兄弟就来砍我',
                    time:'12:20',
                    flag:false,
                    num:0
                },
            ]
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

      /deep/ uni-view{
        font-size: 32upx;
      }

      .iconyonghuxinxi {
        font-size: 25px;
      }

      .iconjiahao {
        font-size: 25px;
      }
    }
  }

</style>
