<template>
  <div class="search">
    <van-search
        v-model="Searchvalue"
        shape="round"
        background="#fff"
        placeholder="请输入搜索关键词"
        disabled
    />
  </div>
</template>

<script>
export default {
name: "search",
  data(){
    return {
      Searchvalue: ''
    }
  },
}
</script>

<style scoped>

</style>
