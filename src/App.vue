<script>
	export default {
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		},
		onLaunch: function() {

		}
	}
</script>

<style lang="less">
	/*每个页面公共css */
	@import 'common/public_css/uni.css';/* 官方样式 */
	@import 'common/public_css/animate.min.css';
  //@import 'common/public_css/iconfont.css'; //阿里第三方图标库 ,本地的文件可以运行在小程序
	@import 'https://at.alicdn.com/t/font_1392728_viv7um2b0v.css';/* 在线链接不可以运行在小程序,但可以运行在网页中*/
  @import 'common/public_css/base.less';

  uni-page-head .uni-page-head{
    background-color: @color-theme!important;
  }
  uni-tabbar .uni-tabbar{
     background-color: @color-theme!important;
  }
  .uni-page-head .uni-btn-icon{
    overflow: initial;
  }

</style>
