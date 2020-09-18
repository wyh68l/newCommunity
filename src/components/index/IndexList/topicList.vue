<template>
    <view class="content">
      <!--话题界面-->
      <view class="list2 animated bounceInUp fast">
        <view class="banner">
          <image src="../../static/images/banner1.jpg" alt="">
        </view>

        <view class="item_content">
          <view class="title">
            <text>热门分类</text>
            <text class="more">更多></text>
          </view>
          <view class="list">
            <view>最新</view>
            <view>游戏</view>
            <view>情感</view>
            <view>动漫</view>
          </view>
        </view>

        <view class="item_bottom clearfix">
          <view class="title">
            <text>最新更新</text>
          </view>

          <view class="list" v-for="(item,index) in topicList" :key="index">
            <view class="icon">
              <img :src="item.icon" alt="">
            </view>
            <view>
              <text class="title">#{{item.title}}#</text>
              <text class="text">{{item.shortTitle}}</text>
              <text>动态{{item.active}} 今日{{item.today}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
</template>

<script>
    import LoadMore from '../../LoadMore.vue'
    import Nothing from '../../Nothing.vue'
    export default {
        name: "topicList",
        props:{
            topicList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        components: {
            LoadMore,
            Nothing
        }
    }
</script>

<style scoped lang="less">

    .content {
      padding: 0 30upx;

      //话题
      .list2{
        .banner{
          border-radius: 5px;

          image{
            width: 100%;
            height: 280upx;
            border-radius: 5px;
          }
        }

        .item_content{
          .title{
            display: flex;
            justify-content: space-between;
            font-size: 30upx;
            margin-top: 10upx;
            color: #444444;

            .more{
              font-size: 25upx;
              color: #999999;
            }
          }

          .list{
            display: flex;
            justify-content: left;
            flex-wrap: wrap;
            margin-top: 15upx;
            border-bottom: 1px solid #f3f3f3;

            view{
              margin-bottom: 25upx;
              margin-right: 30upx;
              padding: 7upx 20upx;
              background-color: #f6f6f6;
              border-radius: 5px;
              color: #666666;
            }
          }
        }

        .item_bottom{
          >.title{
            font-size: 30upx;
            margin-top: 10upx;
            color: #444444;
            margin-bottom: 35upx;
          }

          .list{
            display: flex;
            justify-content: left;
            align-items: center;
            padding-bottom: 25upx;
            border-bottom: 1px solid #f6f6f6;

            .icon{
              margin-right: 40upx;
              img{
                width: 180upx;
                height: 180upx;
                border-radius: 15px;
              }
            }

            text{
              display: block;
              font-size: 25upx;
              color: #999999;
            }

            .title{
              font-size: 30upx;
              color: #444444;
            }
            .text{
              margin-bottom: 15upx;
            }
          }
        }
      }
    }

</style>
