import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/Login";
import Register from "@/views/login/Register";
import Mypopup from "@/views/home/Mypopup";
import Updateinfo from "@/views/profile/Updateinfo";
import ProductDetail from "@/views/product/ProductDetail";
import addresslist from "@/views/address/addresslist";
import addressedit from "@/views/address/addressedit";
import order from "@/views/order/order";
import addressadd from "@/views/address/addressadd";
import Mycategory from "@/views/category/Mycategory";
import Failed from "@/views/home/Failed";
import SearchResult from "@/views/home/SearchResult";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
//如果以上代码失效，可以把两种都写上，就可以解决了
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};


const routes = [
  {
    path: '',
    redirect: '/home',

  },
  {
    path: '/home',
    // 指定的组件
    component:Home,
    meta:{
      ifshowtabbar:true
    },
    children:[
      {
        path: 'popup',
        component:Mypopup,
      }
    ]
  },
  {
    path: '/category',
    component:Category,
    meta:{
      ifshowtabbar:true
    },
    children:[
      {
        path: 'mycategory',
        component:Mycategory,
        meta:{
          ifshowtabbar:true
        },
      }
    ]
  },
  {
    path: '/cart',
    component:Cart,
    meta:{
      ifshowtabbar:true
    }
  },
  {
    path: '/profile',
    component:Profile,
    meta:{
      ifshowtabbar:true
    }
  },
  {
    path: '/login',
    component:Login
  },
  {
    path: '/register',
    component:Register
  },
  {
    path: '/updateinfo',
    component:Updateinfo
  },
  {
    path: '/productdetail',
    component:ProductDetail
  },
  {
    path: '/addresslist',
    component:addresslist
  },
  {
    path: '/addressedit',
    component:addressedit
  },
  {
    path: '/myorder',
    component:order
  },
  {
    path: '/addressadd',
    component:addressadd
  },

  {
    path: '/failed',
    component:Failed
  },
  {
    path: '/searchresult',
    component:SearchResult
  },

]
const router = new VueRouter({
  routes,
  // url模式
  mode:'history'
})

export default router

