<template>
  <div id="login">
    <div class="navbar">
      <van-nav-bar title="登录" left-text="返回" left-arrow  @click-left="onClickLeft">

      </van-nav-bar>
    </div>
    <div class="loginform" >
    <van-form @submit="onSubmit">
      <van-field
          v-model="form.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
      <div class="forget">
        <ul>忘记密码</ul>
      </div>
      <div style="margin: 16px;text-align:center;">
        <van-button  color="#7232dd" plain @click="regsiterclick">免费注册</van-button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {HOST} from '../../common/config'
export default {
name: "Login",
  data() {
    return {
      form:{
        name: '',
        password: '',
      }
    };
  },
  methods: {
    onSubmit(values) {
      let url= `${HOST}/user/login`
      console.log('submit', values);
      axios.post(url,this.form).then(res=>{
        console.log(res.data)
        let response =res.data;
        switch (response.msg){
            case '1':
              sessionStorage.setItem("user",JSON.stringify(this.form))
              this.$router.push('/profile')
              break;
            case '0':
              this.$toast.fail('密码错误')
              break;
            case '2':
              this.$toast.fail('用户不存在')
        }
      })
    },
    onClickLeft(){
      this.$router.go(-1)
    },
    regsiterclick(){
      this.$router.push('register')
    },

  },
}
</script>

<style scoped>
.loginform{
  margin-top: 5px;
}

.forget{
  text-align: right;
  margin-right: 16px;
}


</style>
