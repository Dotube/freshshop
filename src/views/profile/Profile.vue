<template>
  <div >
  <van-row>
    <van-col span="6">
      <van-image :src="firsticon"></van-image>
    </van-col>
    <van-col span="10" @click="loginclick" >点击登录</van-col>
    <van-col span="8"><van-icon name="arrow" /></van-col>
  </van-row>
    <me></me>
  </div>

</template>

<script>

import Me from "@/components/me";
export default {
  name: "Profile",
  components: {
    Me
  },
  methods: {
    loginclick() {
      this.$router.push('login')
      console.log('loginclick');
    }
  },
  data(){
    return{
      firsticon:require('@/assets/images/firsticon.jpg')
    }
  }
}
</script>

<style scoped>
.van-row{
  padding: 20px 4%;
  background-color: #333;
  color: white;

}
.van-image{
  width:80px ;
  border-radius: 20px;
  display: block;
}
.van-col{
  line-height: 80px;
  font-size: 20px;

}

:last-child{
  text-align: right;
}
</style>
