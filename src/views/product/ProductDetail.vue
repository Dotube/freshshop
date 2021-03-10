<template>
<div class="ProductDetail">

  <van-nav-bar  left-text="返回" left-arrow @click-left="back">
    <template #title >
      <van-search
          v-model="Searchvalue"
          shape="round"
          background="#fff"
          placeholder="请输入搜索关键词"
          disabled
          @click="searchbar"
      />
    </template>
    <template #right >
      <van-icon name="shopping-cart-o" size="0.25rem" @click="gotocart" /></template>
  </van-nav-bar>
  <img :src="require('@/assets/images/goods/' + goodsInfo.images + '.jpg' )"
       width="100%" style="display: block"/>


</div>
</template>

<script>
import store from "@/store/store";
import {HOST} from "@/common/config";
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      goodsInfo: [],
      Searchvalue: '',
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },
    gotocart(){
      this.$router.push('/cart')
    },
    searchbar(){
      this.$router.push('/home/popup')
    }
  },

  created() {
    const gid =store.state.gdid ;
    let url= `${HOST}/goods/selbyid/${gid}`
    axios.post(url).then(res=>{
      console.log(res.data)
      this.goodsInfo=res.data;
    });

    console.log(store.state.gdid)

  }
}
</script>

<style scoped>
.van-icon{
  margin-left: 10px;
}
</style>
