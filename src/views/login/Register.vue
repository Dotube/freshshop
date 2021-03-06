<template>
  <div id="register">
  <div class="navbar">
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
  <div class="registerform" >
    <van-form @submit="onSubmit">
      <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <div style="margin: 16px;">
        <van-button  block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
  </div>
</template>

<script>
export default {
name: "Register",
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  },
  data() {
    return {
      username: '',
      password: '',
      email:'',
    };
  },

}
</script>

<style scoped>
.registerform{
  margin-top: 5px;
}
</style>
