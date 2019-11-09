<template>
  <view class="page">

  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    //监听原生导航栏点击事件
    onNavigationBarButtonTap(e) {
      if (e.index === 0) { //判断是不是第一个按钮点击的
        uni.navigateBack({
          delta: 1 //返回上1级
        })
      }
    },
    //监听原生标题栏搜索输入框输入内容变化事件
    onNavigationBarSearchInputChanged(e) {
      console.log(e.text);//实时监听
    },
    //监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
    onNavigationBarSearchInputConfirmed(e) {
      console.log(e);
    },
    methods: {

    }
  }
</script>

<style>

</style>
