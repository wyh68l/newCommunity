<template>
    <view class="page">
      <view class="checkLogin">
          <view class="notLogin">
            <text>登录社区，体验更多功能</text>
            <text>账号密码登录></text>
            <view class="img">
              <view class="iconfont icon iconqq"></view>
              <view class="iconfont icon iconweixin"></view>
              <view class="iconfont icon iconweibo"></view>
            </view>
          </view>
      </view>
    </view>
</template>

<script>
    export default {
        name: "checkLogin"
    }
</script>

<style scoped lang="less">
  .page{
    .checkLogin{
      .notLogin{
        text-align: center;
        text{
          font-size: 32upx;
          color: #666666;
          display: block;
        }

        .img{
          width: 500upx;
          margin: 30upx auto;
          display: flex;
          justify-content: space-between;

          view{
            width: 100upx;
            height: 100upx;
            text-align: center;
            line-height: 100upx;
            color: #fff;
            border-radius: 50%;
            font-size: 50upx;

            &:first-of-type{
              background-color: #2CAEFC;
            }

            &:nth-of-type(2){
              background-color: #2BD19B;
            }
            &:last-of-type{
              background-color: #FC7729;
            }
          }
        }
      }
    }
  }
</style>
