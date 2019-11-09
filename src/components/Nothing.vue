<template>
		<view class="nothing">
      <view class="model1 ">
        <text>程序猿小哥哥可能在撩妹子吧\n敬请期待哦~</text>
        <image src="../../static/images/nothing.jpg" mode=""></image>
      </view>
		  <view class="model2 active">
		     <image src="../../static/images/nothing2.png" mode=""></image>
         <text>程序猿小哥哥可能在撩妹子吧\n敬请期待哦~</text>
		  </view>
		</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less" scoped>
      .nothing{
        text-align: center;
        margin-top: 100upx;
        position: relative;

        .model1{
          display: none;

          text{
              z-index: 2;
              position: relative;
              top:100px;
              font-size: 35upx;
              color: #666;
            }

            image{
              width: 100%;
              height: 500upx;
              position: absolute;
              top: 0;
              left: 0;
              z-index: 1;
            }

        }
        .model2{
          display: none;

          text{
              font-size: 35upx;
              color: #666;
            }

            image{
              width: 100%;
              height: 500upx;
            }

        }

        .active{
          display: block;
        }

        }
</style>
