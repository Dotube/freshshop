<template>
  <ul>
    <li  :key="index" v-for="(goods,index) in goodsInfo" @click="gotoDetail(goods.goodid)">
      <img :src="require('@/assets/images/goods/' + goods.images + '.jpg')" width="100%" style="display: block"/>
      <div class="title" >{{goods.name}}</div>
      <div class="price">{{goods.price|filtermoney}}</div>
    </li>
  </ul>

</template>

<script>
import {HOST} from "@/common/config";
import axios from "axios";
import store from "@/store/store";


export default {
name: "product",

  data(){
    return{
      goodsInfo:[],
      //imgSrc:require('@/assets/images/firsticon.jpg'),
    }

  },
  created() {
    let url= `${HOST}/goods/selAll`;
    axios.post(url,this.form).then(res=>{
      this.goodsInfo=res.data;
    });

  },

  methods:{
  gotoDetail(id){
    let url= `${HOST}/goods/selbyid/${id}`
    axios.get(url);
  //  good.gdid = id;
    store.state.gdid = id;
    this.$router.push('/productdetail?id='+id )
    console.log(id)
    }
  }
}
/*
const good={
  gdid:''
}

Vue.prototype.sharegoodid = good;

*/

</script>

<style scoped>
ul{
  padding: 0.1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

li{
  width: 49%;
  background-color: #ffffff;
  line-height: 0.3rem;
}

.title{
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price{
  text-align: center;
  color: darkred;
}
</style>
