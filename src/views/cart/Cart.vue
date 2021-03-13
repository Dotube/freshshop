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
       <van-checkbox name="a">
         <van-card
             num="2"
             price="2.00"
             title="商品标题"
             thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
         />
       </van-checkbox>

     </van-checkbox-group>
     <van-submit-bar :price="3050" button-text="提交订单"  @submit="onSubmit">
       <van-checkbox v-model="checked">全选</van-checkbox>
     </van-submit-bar>
   </div>

  </div>

</template>

<script>
import store from "@/store/store";
export default {
  name: "Cart",
  data(){
    return{
      result: ['a', 'b'],
      checked:true,
    }
  },
  created() {
    if(!store.state.userid){
      this.$router.push("failed")
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    manage(){

    },
    onSubmit(){

    },
    onClickEditAddress(){

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
</style>
