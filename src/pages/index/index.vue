<template>
  <view class="content">
    <TabBar @tabIndex='getTabIndex'></TabBar>
    <ContentSwiper :tabIndex='tabIndex'></ContentSwiper>
  </view>
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
        tabIndex: 0
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
      }else if (e.index === 0) { //判断是不是第一个按钮点击的
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
      getTabIndex(res) {
        this.tabIndex = res;
      }
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
      width: 200upx;
      height: 200upx;
      background-color: #000;
      margin-top: 50upx;
    }

    .hoverItem {
      background-color: red;
    }
  }
</style>
