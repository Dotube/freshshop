<template>
  <div class="swiper" >
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
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
        'https://www.shou.edu.cn/_upload/article/images/d5/f7/346e9d5947bba6ec52149238abea/cdb73fd6-3bfb-402d-b9af-e91098ba3ec1.jpg',
        'https://www.shou.edu.cn/_upload/article/images/11/6f/ec67c8c4433bad738319ee53fa0c/599a6b97-e31e-440f-bd92-13a278f46725.jpg',
      ],
    };
  },
}
</script>

<style scoped>
img{
  width: 100%;
}

</style>
