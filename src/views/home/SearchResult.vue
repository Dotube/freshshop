<template>
  <div>
    <van-nav-bar  left-text="返回"   left-arrow @click-left="back">
      <template #title>
       “ {{val}} ” 的搜索结果
      </template>
    </van-nav-bar>
  <ul>
    <li  :key="index" v-for="(goods,index) in goodsInfo" @click="gotoDetail(goods.goodid)">
      <img :src="require('@/assets/images/goods/' + goods.images + '.jpg')" width="100%" style="display: block"/>
      <div class="title" >{{goods.name}}</div>
      <div class="price">{{goods.price|filtermoney}}</div>
    </li>
  </ul>
  </div>
</template>

<script>
import {HOST} from "@/common/config";
import axios from "axios";
export default {
name: "SearchResult",
  data(){
  return{
    goodsInfo:[],
    val:'',
  }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    gotoDetail(id){
      let url= `${HOST}/goods/selbyid/${id}`
      axios.get(url);
      this.$router.push('/productdetail?id='+id )
      console.log(id)
    }
  },
  created() {
    this.val = this.$route.query.searchval;
     let url= `${HOST}/goods/selbyname/${ this.val}`;
    console.log( this.val)
    axios.post(url).then(res=>{
      console.log(res.data)
      this.goodsInfo=res.data;
    });
  }
}
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
