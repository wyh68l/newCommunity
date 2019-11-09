<template>
  <view>
    <view class="uni-loadmore" v-if="isMore.loadMore === 'more'">
      <view class="icon iconfont iconloading" style="font-size: 30px;"></view>
    </view>
    <view class="uni-loadmore" v-if="isMore.loadMore === 'noMore'">
      没有更多了哦~
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    props: {
      isMore: {
        default () {
          return {}
        },
        type: Object
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~common/public_css/base.less';

  .uni-loadmore {
    color: @color-theme;
  }
</style>
