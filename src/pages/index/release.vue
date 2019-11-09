<template>
  <view class="page">
    <view class="nav">
      <!-- 引入官方的导航栏-->
      <uni-nav-bar left-icon="arrowleft" color="#fff" rightText="发布" :statusBar='true'>
        <view class="title" @tap="changeType">
          {{selects[selectsIndex]}}
          <view class="iconfont icon iconxiala"></view>
        </view>
      </uni-nav-bar>
    </view>
    <view class="content">
      <view class="uni-textarea">
        <textarea placeholder="说句话吧~" v-model="context" />
        </view>
    </view>
      <view class="uni-list list-pd">
        <view class="uni-list-cell cell-pd">
          <view class="uni-uploader">
            <view class="uni-uploader-head">
              <view class="uni-uploader-title">点击可预览选好的图片</view>
              <view class="uni-uploader-info">{{imageList.length}}/9</view>
            </view>
            <view class="uni-uploader-body">
              <view class="uni-uploader__files">
                <block v-for="(image,index) in imageList" :key="index">
                  <view class="uni-uploader__file">
                    <image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
                  </view>
                </block>
                <view class="uni-uploader__input-box">
                  <view class="uni-uploader__input" @tap="chooseImage"></view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
  </view>
</template>

<script>
  var sourceType = [
  	['camera'],
  	['album'],
  	['camera', 'album']
  ]
  var sizeType = [
  	['compressed'],
  	['original'],
  	['compressed', 'original']
  ]
  import uniIcons from '@/components/uni-icons/uni-icons.vue'
  import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
  export default {
    data() {
      return {
        selects:['所有人可见', '仅自己可见'],
        selectsIndex:0,
        context:'',
        imageList: [],
        sourceTypeIndex: 2,
        sourceType: ['拍照', '相册', '拍照或相册'],
        sizeTypeIndex: 2,
        sizeType: ['压缩', '原图', '压缩或原图'],
        countIndex: 8,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    methods: {
      changeType(){
        //showActionSheet是uniapp提供的
        uni.showActionSheet({
            itemList: this.selects,
            success: (res) => {
                this.selectsIndex = res.tapIndex;
            }
        });
      },
      chooseImage: async function() {
      		// #ifdef APP-PLUS
      		// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
      		if (this.sourceTypeIndex !== 2) {
      			let status = await this.checkPermission();
      			if (status !== 1) {
      				return;
      			}
      		}
      		// #endif

      		if (this.imageList.length === 9) {
      			return;
      		}
      		uni.chooseImage({
      			sourceType: sourceType[this.sourceTypeIndex],
      			sizeType: sizeType[this.sizeTypeIndex],
      			count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
      			success: (res) => {
      				this.imageList = this.imageList.concat(res.tempFilePaths);
      			},
      			fail: (err) => {
      				// #ifdef APP-PLUS
      				if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
      					this.checkPermission(err.code);
      				}
      				// #endif
      				// #ifdef MP
      				uni.getSetting({
      					success: (res) => {
      						let authStatus = false;
      						switch (this.sourceTypeIndex) {
      							case 0:
      								authStatus = res.authSetting['scope.camera'];
      								break;
      							case 1:
      								authStatus = res.authSetting['scope.album'];
      								break;
      							case 2:
      								authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
      								break;
      							default:
      								break;
      						}
      						if (!authStatus) {
      							uni.showModal({
      								title: '授权失败',
      								content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
      								success: (res) => {
      									if (res.confirm) {
      										uni.openSetting()
      									}
      								}
      							})
      						}
      					}
      				})
      				// #endif
      			}
      		})
      	},
      	previewImage: function(e) {
      		var current = e.target.dataset.src
      		uni.previewImage({
      			current: current,
      			urls: this.imageList
      		})
      	},
      	async checkPermission(code) {
      		let type = code ? code - 1 : this.sourceTypeIndex;
      		let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
      			await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
      				'android.permission.READ_EXTERNAL_STORAGE');

      		if (status === null || status === 1) {
      			status = 1;
      		} else {
      			uni.showModal({
      				content: "没有开启权限",
      				confirmText: "设置",
      				success: function(res) {
      					if (res.confirm) {
      						permision.gotoAppSetting();
      					}
      				}
      			})
      		}
      		return status;
      	}

    },
    components: {
      uniIcons,
      uniNavBar
    }
  }
</script>

<style lang="less" scoped>
  .page {
    .title{
      display: flex;
      margin: 0 auto;
      align-items: center;

      .iconxiala{
          margin-left: 5px;
          margin-top: 2px;
      }
    }
    .content{
        .uni-list::before{
               display: none;
             }
      .uni-textarea{
        textarea{
          margin: 30upx auto;
          height: 500upx;
          overflow: scroll;
          border: 1px solid #f6f6f6;
          color: #333;
          font-size: 28upx;
        }
      }
      .cell-pd {
      	padding: 22upx 30upx;
      }
      .list-pd {
      	margin-top: 50upx;
      }
    }
  }
</style>
