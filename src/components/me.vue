<template>
  <van-grid square  clickable :column-num="3">
    <van-grid-item icon="bill-o" text="订单"  @click="myorder"/>
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
import store from "@/store/store";
export default {
name: "me",
  methods:{
    logout(){
      if (store.state.userid)    {
        window.sessionStorage.clear()
        this.$router.push('login')
      }

      else {
        this.$toast.fail("请先登录")
      }

    },
    address(){
      if (store.state.userid)    {
        this.$router.push('addresslist')
      }
      else {
        this.$toast.fail("请先登录")
      }
    },
    myorder(){
      if (store.state.userid)    {
        this.$router.push('myorder')
      }
      else {
        this.$toast.fail("请先登录")
      }
    }
  },
  created() {

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
