<template>
  <div>
    <div class="history">
      <div class="top">
        <h4>历史记录</h4>
        <van-icon name="delete-o" @click="ondelete"/>
      </div>
      <div class="down" >
        <span v-if="!history[0]" style="line-height: 0.1rem; font-size: 0.15rem;color: #999999" >暂无历史搜索</span>
        <van-tag v-else plain  type="default"  :key="index" v-for="(items,index) in history " @click="onhistory(items)">{{ items }}</van-tag>
      </div>
    </div>

    <div class="history">
      <div class="top">
        <h4>热门搜索</h4>
      </div>
      <div class="down">
        <van-tag plain type="danger">果</van-tag>
        <van-tag plain type="default">香蕉</van-tag>
        <van-tag plain type="default">肉</van-tag>
        <van-tag plain type="default">鱼</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/store";
export default {
name: "history",
  data(){
  return{
    history:[],
  }
  },
  created() {
  this.history = store.state.history
  },
  methods:{
    onhistory(items){
      this.$router.push('/searchresult?searchval='+items)
    },
    ondelete(){
      store.state.history = [];
      location.reload();
    }
  }
}
</script>

<style scoped>
.history{
  padding: 0 2%;
  background-color: #fff;
  margin-bottom: 0.05rem;
}

.top{
  display: flex;
  height: 0.5rem;
  font-size: 0.2rem;
  align-items: center;
  justify-content: space-between;
}

h4{
font-weight: normal;
}

.van-tag{
  font-size: 0.14rem;
  margin-right:0.1rem;
  margin-bottom: 0.1rem;
  padding: 0.03rem;
}
</style>
