<template>
  <div >
  <van-row>
    <van-col span="6">
      <van-image :src="firsticon" round @click="avator"></van-image>
    </van-col>
    <div class="myname"  >
      <van-col   span="8" v-if="user.name" >{{user.name}}</van-col>
      <van-col   span="8" v-else @click="loginclick" >点击登录</van-col>
      <van-col span="10"><van-icon name="arrow" @click="logout"/></van-col>
    </div>
  </van-row>
    <me></me>
  </div>

</template>

<script>
import axios from 'axios'
import {HOST} from '../../common/config'
import store from "@/store/store";
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

    },
    logout(){

    },
    avator(){
      if (!this.user.name)    {
        this.$router.push('login')
      }
      else this.$router.push('updateinfo')
    }
  },
  created() {
    if(JSON.parse(sessionStorage.getItem("user")) )
    this.user = JSON.parse(sessionStorage.getItem("user"))
    let url= `${HOST}/user/selbyname/${this.user.name}`;
    axios.get(url).then(res=>{
      console.log(res.data)
      this.userInfo = res.data
      store.state.userid = this.userInfo.id
      console.log(this.userInfo.id)
    })
  },
  data(){
    return{
    //  myavator:'',
     // imgScr:'',
     firsticon:require('@/assets/images/firstava.jpg'),
      user:{},
      record:[],

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
