<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-if="$route.meta.ifshowtabbar"></tabbar>
  </div>



</template>

<script>
import tabbar from "@/components/tabbar";


export default {
  name: 'App',
  components: {
    tabbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #efefef;
  height: 100%;
}

html {
  font-size: 100px;
  height: 100%;
}

body{
  height: 100%;
  font-size: 14px;
}


</style>
