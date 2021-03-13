<template>
  <div>
  <van-empty description="您还未登录！"/>
  <span  @click="login">点击登录</span>
  </div>
</template>

<script>
export default {
name: "Failed",
  methods:{
  login(){
    this.$router.push("login")
  }
  }
}
</script>

<style scoped>

span{
  align-items: center;
}
</style>
