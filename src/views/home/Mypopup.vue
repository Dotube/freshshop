<template>
 <div class="popup">
   <van-search
       v-model="searchval"
       show-action
       @placeholder="scplaceholder"
       @search="onSearch"
       @cancel="onCancel"
   />
   <history></history>
 </div>
</template>

<script>
import History from "@/components/history";
export default {
name: "Mypopup",
  components: {History},
  data(){
  return{
    searchval:'',
    scplaceholder:'',
    blockshow:1
  }
  },
  methods:{
    onSearch(){

    },
    onCancel(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.popup{
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  background-color:  #efefef;
}
</style>
