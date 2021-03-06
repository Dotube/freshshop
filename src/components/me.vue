<template>
  <van-grid square  clickable :column-num="3">
    <van-grid-item icon="bill-o" text="订单" />
    <van-grid-item icon="goods-collect-o" text="收藏" />
    <van-grid-item icon="coupon-o" text="优惠券" />
    <van-grid-item icon="location-o" text="地址管理" />
    <van-grid-item icon="service-o" text="客服" />
    <van-grid-item icon="flag-o" text="足迹" />
    <van-grid-item icon="setting-o" text="设置" />
    <van-grid-item icon="scan" text="扫一扫" />
    <van-grid-item icon="smile-comment-o" text="意见反馈" />
    <van-grid-item icon="question-o" text="帮助中心" />
  </van-grid>
</template>

<script>
export default {
name: "me",
}
</script>

<style scoped>

</style>
