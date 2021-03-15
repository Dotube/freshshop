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
import store from "@/store/store";
//import {HOST} from "@/common/config";
//import axios from "axios";
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
    onSearch(searchval){
      //let url= `${HOST}/goods/selbyname/${searchval}`;
      //axios.get(url);
      this.$router.push('/searchresult?searchval='+searchval);
      console.log(searchval)
      store.state.history.push(searchval);
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
