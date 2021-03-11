<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服"  />
    <van-goods-action-icon icon="cart-o" text="购物车"  badge="0" />
    <van-goods-action-icon :icon="ifsave? 'star-o' : 'star' " :color="ifsave? '#666':'#ff5000'"  text="收藏"   @click="ifsave=!ifsave" />
    <van-goods-action-button type="warning" @click="addToCart" text="加入购物车" />
  </van-goods-action>
</template>

<script>
export default {
  name: "mygoodaction",
  data(){
    return{
      ifsave:false,

    }
  },
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }

  }
}
</script>

<style scoped>

</style>
