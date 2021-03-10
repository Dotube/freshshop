import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import './vantui/vantui'
import 'reset-css'
import router from "@/router";
import store from "@/store/store";

Vue.config.productionTip = false



Vue.filter('filtermoney',function (val){
  return '￥'+val.toFixed(2)+' 元'
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
