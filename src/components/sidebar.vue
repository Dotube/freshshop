<template>
  <div class="navbar">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="新鲜水果" />
      <van-sidebar-item title="当季蔬菜" />
      <van-sidebar-item title="海鲜水产" />
      <van-sidebar-item title="肉禽蛋类" />
      <van-sidebar-item title="烘焙食品" />
      <van-sidebar-item title="餐饮熟食" />
      <van-sidebar-item title="休闲零食" />
      <van-sidebar-item title="饮品酒类" />
      <van-sidebar-item title="厨卫百货" />
      <van-sidebar-item title="美味速食" />
      <van-sidebar-item title="生活服务" />
      <van-sidebar-item title="粮油调味" />
    </van-sidebar>
  </div>

</template>

<script>
export default {
name: "sidebar",
  data() {
    return {
      activeKey: 0,
    };
  },
}
</script>

<style scoped>

</style>
