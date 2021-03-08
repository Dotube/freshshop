<template>
  <div id="register">
  <div class="navbar">
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
  <div class="registerform" >
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
        <van-button  block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {HOST} from '../../common/config'
export default {
name: "Register",
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onSubmit(values) {
      let url= `${HOST}/user/register`
      console.log('submit', values);
      axios.post(url,this.form).then(res=>{
        console.log(res.data)
        let response =res.data;
        switch (response.msg){
          case '0':
            this.$toast.success('注册成功！')
            this.$router.go(-1)
            break;
          case '2':
            this.$toast.fail('用户名已存在！')
        }

      })
    },
  },
  data() {
    return {
      form:{
        name: '',
        password: '',
      }

    };
  },

}
</script>

<style scoped>
.registerform{
  margin-top: 5px;
}
</style>
