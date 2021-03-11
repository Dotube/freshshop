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
  <tips></tips>
  <div class="info">
    <div class="price">{{goodsInfo.price|filtermoney}}</div>
    <h3>{{goodsInfo.name}}</h3>
    <p>{{goodsInfo.detail}}</p>
  </div>
  <div class="attribute">
    <h4>商品参数</h4>
    <ul>
      <li >
        <span>原产地</span>
        <section>{{goodsInfo.status}}</section>
      </li>
      <li >
        <span>净含量</span>
        <section>{{goodsInfo.sale}} 克</section>
      </li>
      <li >
        <span>商品种类</span>
        <section>{{goodsInfo.kind}}</section>
      </li>
    </ul>
  </div>
  <div class="imgshow">
    <img :src="require('@/assets/images/goods/' + goodsInfo.images2 + '.jpg' )"
         width="100%" style="display: block"/>
    <img :src="require('@/assets/images/goods/' + goodsInfo.images3 + '.jpg' )"
         width="100%" style="display: block"/>
    <img :src="require('@/assets/images/goods/' + goodsInfo.images4 + '.jpg' )"
         width="100%" style="display: block"/>
    <img :src="require('@/assets/images/goods/' + goodsInfo.images5 + '.jpg' )"
         width="100%" style="display: block"/>
  </div>
  <div class="mysku">
    <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        :show-add-cart-btn="false"
        :show-buy-btn="false"
        buy-text="加入购物车"
    />
  </div>
  <mygoodaction @addToCart="addtocart"></mygoodaction>
</div>
</template>

<script>
//import store from "@/store/store";
import {HOST} from "@/common/config";
import axios from "axios";
import Tips from "@/components/tips";
import Mygoodaction from "@/components/mygoodaction";

export default {
  name: "ProductDetail",
  components: { Mygoodaction, Tips},
  data() {
    return {
      goodsInfo: [],
      Searchvalue: '',
      show: false,
      sku: {
        tree:[],
        hide_stock:false,
        price:'',
        stock_num:'',
      },
      goods: {
        picture:'',
      },
      messageConfig: {
      },
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
    },
    addtocart(){
      this.show=true;
    }
  },

  created() {
    //const gid =store.state.gdid ;
     const gid = this.$route.query.id
    let url= `${HOST}/goods/selbyid/${gid}`
    axios.post(url).then(res=>{
      console.log(res.data)
      this.goodsInfo=res.data;
      this.goods.picture = require('@/assets/images/goods/' + this.goodsInfo.images + '.jpg' )
      this.sku.price = this.goodsInfo.price.toFixed(2)
      this.sku.stock_num = this.goodsInfo.remain
    });

   //console.log(store.state.gdid)

  }
}
</script>

<style scoped>
.van-icon{
  margin-left: 10px;
}

.info{
  background-color: white;
  height: 1.5rem;
  padding: 0.1rem  4%;
}

h3{
  margin-bottom: 0.1rem;
  font-weight: bolder;
  font-size: 0.2rem;
  line-height:0.25rem
}

p{
  color: #999;
  line-height:0.2rem
}

.price{
  font-size: 0.2rem;
  color: darkred;

  line-height: 0.4rem;
}

.attribute{
  background-color: white;
  padding: 0.2rem 4%;

}

h4{
  font-weight: normal;
  font-size: 0.2rem;
  margin-bottom: 0.2rem;
}

li{
  background-color: #efefef;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  height: .3rem;
  line-height: .3rem;
  margin-bottom: 0.1rem;
  text-align: center;
}

span{
  width: 20%;
  text-align: right;
}

section{
  flex: 1;
}



.van-sku-container{
  min-height: auto;
}


</style>
