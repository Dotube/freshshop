<template>
<div>
  <div class="navbar">
    <van-nav-bar title="分类" left-text="返回" left-arrow @click-left="goback">
      <template #right>
        <van-icon name="search" size="18" @click="gosearch" />
      </template>
    </van-nav-bar>
  </div>
  <div class="mysidebar">
    <sidebar></sidebar>
  </div>

</div>

</template>

<script>
import Sidebar from "@/components/sidebar";

export default {
  name: "Category",
  components: {Sidebar},
  methods:{
    goback(){
      this.$router.replace("/home")
    },
    gosearch(){
      this.$router.push('/home/popup')
    }
  },
}
</script>

<style scoped>

</style>
