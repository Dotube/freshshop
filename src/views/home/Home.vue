<template>
  <div id="home">

    <div class="search" @click="searchclick" ><search></search></div>
    <div class="swipe">  <swipe></swipe></div>
    <div class="grid">  <grid></grid></div>
   <transition name="van-slide-right">
     <router-view></router-view>
   </transition>
    <product></product>
  </div>
</template>

<script>

import Swipe from "@/components/swipe";
import Grid from "@/components/grid";
import Search from "@/components/search";
import Product from "@/components/product";
export default {
  name: "Home",
  components: {
    Product,
    Search,
    Grid,
    Swipe
  },
  methods:{
    searchclick(){
      this.$router.push('/home/popup')
    }
  }
}
</script>

<style scoped>
.search{
  margin-top: 10px;
}
.swipe{
  margin-top: 10px;
}

</style>
