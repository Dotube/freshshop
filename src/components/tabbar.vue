<template>
 <div class="tabbar">
   <van-tabbar route>
     <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
     <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
     <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
     <van-tabbar-item replace to="/profile" icon="manager-o">我的</van-tabbar-item>

   </van-tabbar>
 </div>
</template>

<script>
export default {
name: "tabbar",
  data() {
    return {
      active: 0,
    };
  }
}
</script>

<style scoped>

</style>
