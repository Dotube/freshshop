<template>
  <div>
    <div>
      <van-nav-bar  left-text="返回" left-arrow @click-left="back">
        <template #title >
          <div>购物车</div>
        </template>
        <template #right >
          <div @click="manage">管理</div>
        </template>
      </van-nav-bar>
    </div>
   <div>

     <van-checkbox-group v-model="result">
       <van-checkbox :name="item.id"  :key="item.id" v-for="item in shoppingCart" >
         <van-swipe-cell>
         <van-card
             :num="item.num"
             :price="item.price.toFixed(2)"
             :title="item.goodsName"
             :thumb="require('@/assets/images/goods/' + item.image + '.jpg')"
             @click="clickcheckbox(item.id)"
         />
           <template #right>
             <van-button square text="删除" type="danger" class="delete-button" />
           </template>

         </van-swipe-cell>
         <van-stepper v-model="item.num" v-show="ifshowstep" min="1" max="99" />
       </van-checkbox>
     </van-checkbox-group>

     <van-submit-bar :price="myorderprice" button-text="提交订单"  @submit="onSubmit()">
       <van-checkbox v-model="checkall">全选</van-checkbox>
     </van-submit-bar>
   </div>

  </div>

</template>

<script>
import store from "@/store/store";
import {HOST} from "@/common/config";
import axios from "axios";
import {Toast} from "vant";

export default {
  name: "Cart",
  data(){
    return{
      result: [],
      checkall:false,
      ifshowstep:false,
      value:'',
      shoppingCart:[],
      orderlist:[
        {id:'', orderid:'', goodid:'',
          status:'', date:'', price:'',
          num:'', userid:''
        }, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {}
      ],
      myorderprice:0,
      myorderid:'',
    }
  },
  created() {
    //let userid = store.state.userid

    if (!store.state.userid) {
      this.$router.push("failed")
      console.log(store.state.userid)
    }

    else {
      let url= `${HOST}/cart/queryMyCart/${store.state.userid}`
      axios.post(url).then(res => {
        this.shoppingCart= res.data
        console.log( this.shoppingCart)

      })
    }

  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    manage(){
      this.ifshowstep=!this.ifshowstep
      console.log(store.state.userid)
    },
    onSubmit(){
      var myDate = new Date();
      var time =
          myDate.getDate().toString() +myDate.getHours().toString() +
          myDate.getMilliseconds().toString() + store.state.userid.toString()
      this.myorderid = parseInt(time);
      console.log(this.myorderid)


      for(let i=0;i<this.shoppingCart.length;i++)
      {
        if(this.shoppingCart[i].checked == true){
          this.orderlist[i].goodid=this.shoppingCart[i].id;
          this.orderlist[i].num = this.shoppingCart[i].num;
          this.orderlist[i].status = '待发货';
          this.orderlist[i].date = time;
          this.orderlist[i].userid = store.state.userid;
          this.orderlist[i].price = this.myorderprice/100;
          this.orderlist[i].orderid = this.myorderid;
          console.log(this.orderlist[i])

          let url= `${HOST}/order/add/`;
          axios.post(url,this.orderlist[i]).then(res=>{
            console.log(res.data.state)
            if(res.data.state === 200){
              Toast.success('购买成功！');
            }
          });
        }

      }

    },
    clickcheckbox(id){
      this.shoppingCart[id-1].checked = !this.shoppingCart[id-1].checked;
      console.log(this.shoppingCart[id-1].checked)
      //算总价
      for(let i=0,orderprice  = 0;i<this.shoppingCart.length;i++)
      {
        if(this.shoppingCart[i].checked == true)
          orderprice = this.shoppingCart[i].price * this.shoppingCart[i].num + orderprice;
        this.myorderprice = orderprice * 100;
      }

    }

  }
}
</script>

<style scoped>


.van-submit-bar{
  bottom: 50px;
}

.van-checkbox{
  padding: 0.1rem 4%;
  background-color: white;
  margin: 5px 5px 5px 5px;
  border-radius: 10px;
}

/deep/.van-checkbox__label{
  flex: 1;
}

.van-card{
  background-color: white;
}

.van-stepper{
  text-align: right;
}

.delete-button {
  height: 100%;
}
</style>
