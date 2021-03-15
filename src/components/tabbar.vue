<template>
 <div class="tabbar">
  <!-- <van-tabbar route fixed >
     <van-tabbar-item replace to="/home" icon="home-o" >首页</van-tabbar-item>
     <van-tabbar-item replace to="/category/mycategory?id=0" icon="apps-o"  >分类</van-tabbar-item>
     <van-tabbar-item replace to="/cart" icon="cart-o" >购物车</van-tabbar-item>
     <van-tabbar-item replace to="/profile" icon="manager-o" >我的</van-tabbar-item>
   </van-tabbar>  -->

   <van-tabbar v-model="active">
     <van-tabbar-item icon="home-o" @click="gohome">首页</van-tabbar-item>
     <van-tabbar-item icon="apps-o" @click="gocate">分类</van-tabbar-item>
     <van-tabbar-item icon="cart-o" @click="gocart">购物车</van-tabbar-item>
     <van-tabbar-item icon="manager-o" @click="goprofile">我的</van-tabbar-item>
   </van-tabbar>

 </div>

</template>

<script>
export default {
name: "tabbar",
  data() {
    return {
      active: '0',
    };
  },
  methods:{
    gohome(){
     this.$router.replace("/home")
    },
    gocate(){
      this.$router.replace("/category/mycategory")
    },
    gocart(){
      this.$router.replace("/cart")
    },
    goprofile(){
      this.$router.replace("/profile")
    }
  }
}
</script>

<style scoped>

</style>
