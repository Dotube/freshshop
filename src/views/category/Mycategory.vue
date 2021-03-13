<template>
<div>
  <van-card :key="index" v-for="(goods,index) in goodsInfo" @click="gotoDetail(goods.goodid)"
      :price="goods.price.toFixed(2)"
      :title="goods.name"
      :thumb="require('@/assets/images/goods/' + goods.images + '.jpg')" width="100%" style="display: block"
  />
</div>
</template>

<script>


import {HOST} from "@/common/config";
import axios from "axios";
import store from "@/store/store";

export default {
name: "mycategory",
  data(){
  return{
    goodsInfo:'',
  }
  },
  methods:{
      gotoDetail(id){
        let url= `${HOST}/goods/selbyid/${id}`
        axios.get(url);
        this.$router.push('/productdetail?id='+id )
        console.log(id)
      }
  },
  created() {
    const id = store.state.cateindex;
    console.log(id)
    this.$router.push(`/category/mycategory?id=0`)
    let url = `${HOST}/goods/selbykind/0`;
    axios.get(url).then(res => {
      console.log(res.data)
      this.goodsInfo = res.data;
    })
  },

  beforeRouteUpdate () {
    const id = store.state.cateindex;
    console.log(id)
    let url = `${HOST}/goods/selbykind/${id}`;
    axios.get(url).then(res => {
      console.log(res.data)
      this.goodsInfo = res.data;
    })
  },

}
</script>

<style scoped>

</style>
