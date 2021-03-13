<template>
  <div class="grid" >
    <van-grid clickable :column-num="4" square :border="false" >
      <van-grid-item v-for="(item,index) in list" :key="index" @click="goto(index)">
        <img class="img" :src="item.image" />
        <img class="img2" :src="item.image2" />
        <span>{{item.title}}</span>
      </van-grid-item>

    </van-grid>
  </div>
</template>

<script>
export default {
name: "grid",
  methods:{
    goto(index){
      this.$router.replace(`/category/mycategory?id=${index}`)
      console.log(this.list.index)
    }
  },
  data() {
    return {
      list:[
        {id:0,image:require('@/assets/images/shucai.png'),title:'蔬菜'},
        {id:1,image:require('@/assets/images/shuiguo.png'),title:'水果'},
        {id:2,image:require('@/assets/images/haixian.png'),title:'海鲜'},
        {id:3,image:require('@/assets/images/rou.png'),title:'肉蛋'},
        {id:4,image2:require('@/assets/images/hongbei.png'),title:'烘培'},
        {id:5,image2:require('@/assets/images/jiu.png'),title:'酒水'},
        {id:6,image2:require('@/assets/images/sushi.png'),title:'速食'},
        {id:7,image2:require('@/assets/images/lingshi.png'),title:'零食'},
        {id:8,image2:require('@/assets/images/shenghuo.png'),title:'百货'},
        {id:9,image2:require('@/assets/images/shushi.png'),title:'熟食'},
        {id:10,image2:require('@/assets/images/rexiao.png'),title:'热卖'},
        {id:11,image2:require('@/assets/images/quanbu.png'),title:'全部'},
      ]
    };
  },
}
</script>

<style scoped>
.grid{
  background-color: white;
  margin-top: 5px;
}

.img2{
  width: 70%;
}
</style>
