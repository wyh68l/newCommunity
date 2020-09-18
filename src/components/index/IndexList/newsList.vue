<template>
  <view class="page">
    <view class="content">
      <!--关注界面-->
      <view class="list animated bounceInRight fast" v-for="(item,index) in attentionList" :key='index'>
        <view class="top_nav clearfix">
          <view class="item_left">
            <image :src="item.icon" mode="scaleToFill" lazy-load></image>
            <text>{{item.userName}}</text>
          </view>
          <view class="item_right">
            <button type="primary" v-if="item.focus" class="active" @tap="attention(item)">+关注</button>
            <button type="default" @tap="attention(item)" v-else>已关注</button>
          </view>
        </view>
        <view class="item_content">
          <view class="img" v-if="item.contentType === 'img'">
            <text>{{item.title}}</text>
            <image :src="item.content" mode="scaleToFill" lazy-load></image>
          </view>
          <view class="share" v-if="item.contentType === 'share'">
            <image :src="item.content" mode="scaleToFill" lazy-load></image>
            <text>{{item.shareTitle}}</text>
          </view>
          <view class="default" v-if="item.contentType === 'default'">
            <text>{{item.contentText}}</text>
          </view>
        </view>
        <view class="item_bottom clearfix">
          <view class="praise">
            <view>{{item.address}}</view>
          </view>
          <view class="comment">
            <view :class="{'icon iconfont iconxiaolianchenggong':true,'active':item.isPraise}" @tap="change({type:'praise',item:item})">
              {{item.praise}}
            </view>
            <view :class="{'icon iconfont iconpinglun':true,'active':item.isComment}">{{item.comments}}</view>
            <view :class="{'icon iconfont iconzhuanfa':true,'active':item.isShare}">{{item.share}}</view>
          </view>
        </view>
        <loadMore :isMore='item'></loadMore>
      </view>
      <view v-if='attentionList.length === 0' class="nothing">
        <Nothing></Nothing>
      </view>

    </view>
  </view>
</template>

<script>
    import LoadMore from '../../LoadMore.vue'
    import Nothing from '../../Nothing.vue'

    export default {
        data() {
            return {
                Pactive: null,
                Lactive: null,
                newsTabIndex:0
            }
        },
        props: {
            attentionList: {
                type: Array,
                default () {
                    return []
                }
            }
        },
        created(){

        },
        methods: {
            change(payload) {
                if (payload) {
                    switch (payload.type) {
                        case 'praise':
                            if (!payload.item.isPraise) {
                                payload.item.isPraise = true;
                                payload.item.praise++;
                                if(payload.item.isLow){
                                    payload.item.low--;
                                    payload.item.isLow = false
                                }
                            }
                            break;
                        case 'low':
                            if (!payload.item.isLow) {
                                payload.item.isLow = true;
                                payload.item.low++;
                                if(payload.item.isPraise){
                                    payload.item.praise--;
                                    payload.item.isPraise = false
                                }
                            }
                            break;
                        case 'share':
                            if (!payload.item.isShare) {
                                payload.item.isShare = true;
                                payload.item.share++;
                            }
                            break;
                    }
                } else {}
            },
            attention(item) {
                if(item.focus){
                    item.focus = false;
                    this.$toast.show('关注成功哦~'); //提示框
                }else{
                    item.focus = true;
                    this.$toast.show('已取消关注~'); //提示框
                }
            }
        },
        components: {
            LoadMore,
            Nothing
        }
    }
</script>

<style lang="less" scoped>
  @import '~common/public_css/base.less';

  .page {
    padding: 15upx 0;

    .content {
      padding: 0 30upx;

      //关注
      .list {
        border-bottom: 1px solid #f6f6f6;
        padding-bottom: 10upx;
        margin-bottom: 15upx;

        &:last-of-type {
          margin-bottom: 0;
          border-bottom: none;
        }

        .top_nav {

          .item_left,
          .item_right {
            float: left;
            display: flex;
            align-items: center;
            height: 85upx;

            image {
              width: 85upx;
              height: 85upx;
              border-radius: 100%;
              margin-right: 15upx;
            }

            text {
              color: #666666;
              font-size: 30upx;
            }
          }

          .item_right {
            float: right;

            button {
              color: #666666;
              font-size: 18upx;
              width: 150upx;
              height: 50upx;
              line-height: 50upx;
            }

            .active {
              background-color: @color-theme;
              color: #fff;
            }
          }
        }

        .item_content {
          .img{
            text {
              color: #444444;
              font-size: 32upx;
              display: block;
              margin: 10px 0;
            }

            image {
              width: 100%;
              height: 240px;
              border-radius: 3%;
            }
          }

          .share{
            display: flex;
            padding: 30upx 30upx;
            background-color: #f6f6f6;
            margin: 20upx;
            border-radius: 10upx;
            align-items: center;

            text {
              color: #444444;
              width: 400upx;
              font-size: 28upx;
              display: block;
              margin: 10upx 0;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }

            image {
              width: 150upx;
              height: 100upx;
              margin-right: 20upx;
              border-radius: 10upx;
            }
          }
          .default{
            text {
              color: #444444;
              font-size: 32upx;
              display: block;
              padding: 20upx;
              overflow: hidden;
            }
          }
        }

        .item_bottom {

          .praise,
          .comment {
            float: left;

            view {
              display: inline-block;
              margin-right: 15px;
              color: #666666;
              font-size: 16px;


              &:last-of-type {
                margin-right: 0;
              }
            }

            .active {
              color: @color-theme;
            }
          }

          .comment {
            float: right;
          }
        }

      }
    }
  }
</style>
