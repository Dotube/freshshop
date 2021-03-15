<template>
<div>
  <div>
    <van-nav-bar  left-text="返回" left-arrow @click-left="back">
      <template #title >
        <div>订单</div>
      </template>
    </van-nav-bar>
  </div>
  <div class="tabs">
    <van-tabs v-model="active">
      <van-tab title="全部">

      </van-tab>
      <van-tab title="未付款">
        <van-card
            :key="item.id" v-for="item in myorder"
            :price="item.price"
            desc="desc"
            :title="item.goodsName"
            :thumb="require('@/assets/images/goods/' + item.image + '.jpg')"

        />

      </van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="待评价"></van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>

import {HOST} from "@/common/config";
import store from "@/store/store";
import axios from "axios";

export default {
name: "order",
  data(){
    return{
      active: 1,
      myorder:[],
    }
  },
  created() {
    let url= `${HOST}/order/queryMyorder/${store.state.userid}`
    axios.post(url).then(res => {
      this.myorder= res.data
      console.log( this.myorder)

    })
  },
  methods:{
    back(){
      this.$router.go(-1);
    },

  }
}
</script>

<style scoped>

</style>
