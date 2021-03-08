import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/login/Login";
import Register from "@/views/login/Register";
import Mypopup from "@/views/home/Mypopup";
import Updateinfo from "@/views/profile/Updateinfo";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

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
    }
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
]
const router = new VueRouter({
  routes,
  // url模式
  mode:'history'
})

export default router

