<template>
    <div class="Toast animated fadeIn" v-show="isShow">
        <p class = ''>{{mes}}</p>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        data(){
            return {
                mes:'',
                isShow:false
            }
        },
        methods:{
            show(mes='哈哈哈',delay=1500){
                this.mes = mes
                this.isShow = true
                setTimeout(()=>{
                    this.isShow = false;
                },delay)
            }
        }
    }
</script>

<style scoped lang="less">
  .Toast{
    padding: 30rpx 50rpx;
    position: fixed;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.5);
    border-radius: 4%;
    z-index: 999;

    p{
      color: #fff;
      font-size: 30upx;
    }
  }

</style>
