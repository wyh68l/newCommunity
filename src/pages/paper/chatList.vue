<template>
    <view class="page">
        <view class="chatList animated bounceInRight fast">
          <view class="item" v-for="(item,index) in list" :key="index">
            <view class="icon">
              <img :src="item.icon" alt="">
            </view>
            <view class="content">
              <text>{{item.nickName}}</text>
              <text class="text">{{item.title}}</text>
            </view>
            <view class="right">
                <text class="time">{{item.time}}</text>
                <text class="num" v-if="item.flag">{{item.num}}</text>
            </view>
          </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "chatList",
        props:{
            list:{
                default(){
                    return []
                },
                type:Array
            }
        }
    }
</script>

<style scoped lang="less">

  .page{
    padding: 30upx 15upx;
    .chatList{

      .item{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f6f6f6;
        padding: 20upx;

        .icon{
          img{
            width: 85upx;
            height: 85upx;
            border-radius: 100%;
            margin-right: 15upx;
          }
        }

        .content{
          >text{
            font-size: 30upx;
            display: block;
            color: #444444;
          }

          .text{
            width: 500upx;
            color: #999999;
            font-size: 25upx;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

        .right{
          .time{
            color: #999999;
            font-size: 25upx;
            display: block;
          }

          .num{
            margin-left: 10upx;
            text-align: center;
            border-radius: 50%;
            padding: 5upx 15upx;
            color: #fff;
            background-color: #FA5A57;
          }
        }
      }
    }
  }
</style>
