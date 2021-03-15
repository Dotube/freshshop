<template>
  <div>
    <div class="navbar">
      <van-nav-bar  left-text="返回" left-arrow @click-left="goback">
      </van-nav-bar>
    </div>
  <van-empty description="您还未登录！"/>
  <div class="info" @click="login">点击此处登录</div>
  </div>
</template>

<script>


export default {
name: "Failed",
  methods:{
  login(){
    this.$router.push("login")
  },
    goback(){
    this.$router.push("/home")
    }
  },
  created() {

  }
}
</script>

<style scoped>

.info{
  text-align: center;
  color: #666666;
}
</style>
