<template>
  <div class="search">
    <van-sticky>
        <van-search
            v-model="Searchvalue"
            shape="round"
            background="#fff"
            placeholder="请输入搜索关键词"
            disabled
        />
    </van-sticky>
  </div>
</template>

<script>
export default {
name: "search",
  data(){
    return {
      Searchvalue: '',
      container: null,
    }
  },
}
</script>

<style scoped>

</style>
