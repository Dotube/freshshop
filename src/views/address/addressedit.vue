<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="编辑地址" left-text="返回" left-arrow  @click-left="back">
      </van-nav-bar>
    </div>
    <div>
      <van-address-edit
          :area-list="areaList"
          :address-info="AddressInfo"
          show-delete
          @save="onSave"
          @delete="onDelete"

      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { areaList } from '@/assets/js/areaData';
import {HOST} from "@/common/config";
import axios from "axios";
//import store from "@/store/store";

export default {
  name: "addressedit",
  data() {
    return {
      areaList: areaList,
      AddressInfo: {
        name:'',
        tel:'',
      },
      address:'',
      form:{
        id:'',
        userid:'',
        name:'',
        phone:'',
        address:''
      }
    };
  },
  methods: {
    onSave() {
      //let url= `${HOST}/address/update/${this.form.id}`
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    back(){
      this.$router.go(-1)
    },
    getData(){
      let url= `${HOST}/address/selbyid/${this.form.id}`
      axios.get(url).then(res=>{
        this.AddressInfo.tel = res.data.phone
        this.AddressInfo.name = res.data.name
        console.log(res.data)
      });
    }
  },
  created() {
    this.form.id = this.$route.query.id
    this.getData()

  }
}
</script>

<style scoped>

</style>
