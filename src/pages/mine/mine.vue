<template>
	<view class="page animated bounceInRight fast">
    <checkLogin></checkLogin>

    <view class="nav">
        <view class='item'>
            <text class="num">0</text>
            <text>提问</text>
        </view>
      <view class='item'>
        <text class="num">0</text>
        <text>动态</text>
      </view>
      <view class='item'>
        <text class="num">0</text>
        <text>评论</text>
      </view>
      <view class='item'>
        <text class="num">0</text>
        <text>收藏</text>
      </view>
    </view>

    <view class="ad">
      <img src="../../static/images/demo20.jpg" alt="">
    </view>

    <view class="list">
      <view class="item">浏览历史 <text class="iconfont icon iconicon-right"></text></view>
      <view class="item">关于我们 <text class="iconfont icon iconicon-right"></text></view>
    </view>
	</view>
</template>

<script>
  import checkLogin from "./checkLogin";
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
      components:{
          checkLogin,
      }
	}
</script>

<style scoped lang="less">
  .page{
    padding: 15upx 40upx;

    .nav{
      display: flex;
      justify-content: space-around;
      text-align: center;
      margin-bottom: 20upx;

      text{
        display: block;
        font-size: 30upx;
        color: #666666;
      }

      .num{
        color: #444444;
      }
    }

    .ad{
      img{
        border-radius: 10upx;
      }
    }

    .list{
      margin-top: 20upx;
      .item{
        padding: 20upx 0;
        border-bottom: 1px solid #f4f4f4;

        text{
          float: right;
        }
      }
    }
  }
</style>
