<template>
  <div class="grid" >
    <van-grid clickable :column-num="4" square :border="false" >
      <van-grid-item v-for="(item,index) in list" :key="index" to="/">
        <img :src="item.image" />
        <span>{{item.title}}</span>
      </van-grid-item>

    </van-grid>
  </div>
</template>

<script>
export default {
name: "grid",
  data() {
    return {
      list:[
        {id:0,image:require('@/assets/images/fruit.jpg'),title:'蔬菜'},
        {id:1,image:require('@/assets/images/fruit.jpg'),title:'水果'},
        {id:2,image:require('@/assets/images/fruit.jpg'),title:'海鲜'},
        {id:3,image:require('@/assets/images/fruit.jpg'),title:'肉蛋'},
        {id:4,image:require('@/assets/images/fruit.jpg'),title:'烘培'},
        {id:5,image:require('@/assets/images/fruit.jpg'),title:'酒水'},
        {id:6,image:require('@/assets/images/fruit.jpg'),title:'速食'},
        {id:7,image:require('@/assets/images/fruit.jpg'),title:'零食'},
        {id:8,image:require('@/assets/images/fruit.jpg'),title:'百货'},
        {id:9,image:require('@/assets/images/fruit.jpg'),title:'熟食'},
        {id:10,image:require('@/assets/images/fruit.jpg'),title:'热卖'},
        {id:11,image:require('@/assets/images/fruit.jpg'),title:'全部'},
      ]
    };
  },
}
</script>

<style scoped>
.grid{
  background-color: white;
  margin: 10px;
}

</style>
