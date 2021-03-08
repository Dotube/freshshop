<template>
  <div id="updateinfo">
    <div class="navbar">
      <van-nav-bar title="更换头像" left-text="返回" left-arrow  @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <div class="avator">
    <van-image :src="firsticon"   class="myavator"></van-image>
    </div>
    <div class="upload">
      <van-uploader :after-read="afterRead" >
        <van-button icon="plus" type="primary">上传头像</van-button>
      </van-uploader>
    </div>

  </div>
</template>

<script>
export default {
name: "Updateinfo",
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
  },
  data(){
    return {
      firsticon: require('@/assets/images/firsticon.jpg')
    }
  }
}
</script>

<style scoped>
.myavator{
  width:1.5rem;
  height:1.5rem;
  margin-top: 0.5rem;
}

.avator{
  text-align: center;
}

.upload{
  text-align: center;
  margin-top: 0.5rem;
}
</style>
