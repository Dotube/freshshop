<template>
  <div class="swiper" >
  <van-swipe :autoplay="3000">
    <van-swipe-item  @click="gotoproduct(index)" v-for="(image, index) in images" :key="index">
      <img v-lazy="image"  style="display: block"/>
    </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>
export default {
name: "swipe",
  data() {
    return {
      images: [
        require('@/assets/images/swip1.jpg'),
        require('@/assets/images/swip2.jpg'),
      ],
    };
  },
  methods:{
    gotoproduct(index){
      switch (index){
        case 0 :this.$router.push("/productdetail?id=13")
          break;
        case 1: this.$router.push("/productdetail?id=14")
          break;
      }
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}

</style>
