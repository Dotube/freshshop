<template>
  <van-grid square  clickable :column-num="3">
    <van-grid-item icon="bill-o" text="订单" />
    <van-grid-item icon="goods-collect-o" text="收藏" />
    <van-grid-item icon="coupon-o" text="优惠券" />
    <van-grid-item icon="location-o" text="地址管理" @click="address"/>
    <van-grid-item icon="service-o" text="客服" />
    <van-grid-item icon="flag-o" text="足迹" />
    <van-grid-item icon="setting-o" text="设置" />
    <van-grid-item icon="scan" text="扫一扫" />
    <van-grid-item icon="smile-comment-o" text="意见反馈" />
    <van-grid-item icon="question-o" text="帮助中心" />
    <van-grid-item icon="close" text="退出" @click="logout"/>
  </van-grid>
</template>

<script>
export default {
name: "me",
  methods:{
    logout(){
      if (this.user.name =='点击登录')    {
        this.$toast.fail("请先登录")
      }
      else {
        window.sessionStorage.clear()
        this.$router.push('login')
      }

    },
    address(){
      if (this.user.name =='点击登录')    {
        this.$toast.fail("请先登录")
      }
      else {
        window.sessionStorage.clear()
        this.$router.push('addresslist')
      }
    }
  },
  created() {
    this.user.name = '点击登录'
    if(JSON.parse(sessionStorage.getItem("user")) )
      this.user = JSON.parse(sessionStorage.getItem("user"))
  },
  data(){
  return{
    user:{},
  }
  }
}
</script>

<style scoped>

</style>
