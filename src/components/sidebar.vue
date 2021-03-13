<template>
  <div class="sidebar">
    <div class="mysidebar">
      <van-sidebar v-model="activeKey" @change="onChange">
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
    <div class="myproduct">
      <router-view :key="$route.fullpath" ></router-view>
    </div>
  </div>

</template>

<script>
import {HOST} from "@/common/config";
import axios from "axios";
import store from "@/store/store";

export default {
name: "sidebar",

  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    onChange(index) {
     // Notify({ type: 'primary', message: index });
      let url = `${HOST}/goods/selbykind/${index}`;
      axios.get(url).then(res => {
        console.log(res.data)
        store.state.cateindex = index;
      this.$router.push(`/category/mycategory?id=${index+999}`)
      })
    },
  },
  created() {
    let url = `${HOST}/goods/selbykind/0`;
    axios.get(url).then(res => {
      console.log(res.data)
      store.state.cateindex = 0;
    })
  }
}
</script>

<style scoped>
.mysidebar{
  float:left;
  width:80px;
}
.myproduct {
  float: left;
  width: 294px;
}

</style>
