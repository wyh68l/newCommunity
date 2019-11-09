<template>
  <view class="page">
    <view class="uni-tab-bar">
      <!-- :current为uniapp内置属性，意思是设置当前的滑块的下标-->
      <swiper class="swiper-box" :style="{'height':scrollHeight+'px'}" :current="tabIndex" @change="changeTabIndex">
        <swiper-item v-for="(item,index) in swiperList" :key="index">
          <!-- @scrolltolower为uniapp的触底事件-->
          <scroll-view scroll-y="true" class="list" @scrolltolower="loadMore(index)">
            <!-- <slot name="swiper"></slot> -->
            <IndexList :indexList='item.indexList'></IndexList>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
  import IndexList from '../../components/index/IndexList/IndexList.vue'
  export default {
    data() {
      return {
        scrollHeight: 0,
        swiperList: [{
            indexList: [{
                id: '1',
                icon: '../../static/images/ck16.png',
                userName: '权志龙',
                focus: true,
                title: '这是标题哦',
                content: '../../static/images/rain.jpg',
                praise: 100,
                low: 50,
                comments: 20,
                share: 30,
                isPraise: false,
                isLow: true,
                isComment: false,
                isShare: true,
                loadMore: false
              },
              {
                id: '2',
                icon: '../../static/images/ck16.png',
                userName: '权志龙',
                focus: true,
                title: '这是标题哦',
                content: '../../static/images/rain.jpg',
                praise: 100,
                low: 50,
                comments: 20,
                share: 30,
                isPraise: false,
                isLow: true,
                isComment: false,
                isShare: true,
                loadMore: false
              },
            ]
          },
          {
            indexList: [{
                id: '1',
                icon: '../../static/images/ck16.png',
                userName: '权志龙',
                focus: true,
                title: '这是标题哦',
                content: '../../static/images/rain.jpg',
                praise: 100,
                low: 50,
                comments: 20,
                share: 30,
                isPraise: false,
                isLow: true,
                isComment: false,
                isShare: true,
                loadMore: false
              },
              {
                id: '2',
                icon: '../../static/images/ck16.png',
                userName: '权志龙',
                focus: true,
                title: '这是标题哦',
                content: '../../static/images/rain.jpg',
                praise: 100,
                low: 50,
                comments: 20,
                share: 30,
                isPraise: false,
                isLow: true,
                isComment: false,
                isShare: true,
                loadMore: false
              },
            ]
          },
          {},
          {},
          {},
          {}
        ],
      }
    },
    props: {
      tabIndex: {
        default () {
          return 0
        },
        type: Number
      }
    },
    created() { //这是uniapp中的生命周期函数，表示刚创建页面，和created类似
      this.getScrollHeight();
    },
    methods: {
      getScrollHeight() {
        //uni.getSystemInfo为uniapp的内置方法，用于获取系统的信息
        uni.getSystemInfo({
          success: (res) => {
            // console.log(res.windowHeight); //获取窗口高度
            //uni.upx2px(100)将100px转化为upx，因为要减去顶部导航栏的距离
            let height = res.windowHeight - uni.upx2px(80);
            this.scrollHeight = height;
          }
        })
      },
      changeTabIndex(e) {
        //e.detail.current获取当前滑块的下标
        //使用事件总线的方法来进行组件间的通信
        this.$bus.$emit('changeTabIndex', e.detail.current);
      },
      //上拉加载更多
      loadMore(index) {
        let last = this.swiperList[index].indexList.length - 1;
        let item = this.swiperList[index].indexList[last];
        if (item.loadMore === false) {
          item.loadMore = 'more';
          setTimeout(() => {
            let temp = {
              id: '2',
              icon: '../../static/images/ck16.png',
              userName: '权志龙',
              focus: true,
              title: '这是标题哦',
              content: '../../static/images/rain.jpg',
              praise: 100,
              low: 50,
              comments: 20,
              share: 30,
              isPraise: false,
              isLow: true,
              isComment: false,
              isShare: true,
              loadMore: true
            };
            this.swiperList[index].indexList.push(temp)
            item.loadMore = false;
          }, 1000)
        }else if(item.loadMore === true){
          item.loadMore = 'noMore';
        }
      }
    },
    components: {
      IndexList,
    }
  }
</script>

<style lang="less">
  .page {
    /deep/ .uni-tab-bar .list {
      width: 100% !important;
    }
  }
</style>
