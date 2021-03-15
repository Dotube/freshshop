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
          ref="myArea"
          show-set-default
          @change-default="changeDefault"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { areaList } from '@/assets/js/areaData';
import {HOST} from "@/common/config";
import axios from "axios";
import store from "@/store/store";
//import store from "@/store/store";

export default {
  name: "addressedit",
  data() {
    return {
      areaList: areaList,
      AddressInfo: {},
      form:{
        id:'',
        userid:'',
        addressDetail:'',
        addressdetail:'',
        name:'',
        tel:'',
        province:'',
        city:'',
        county:'',
        areaCode:'',
        areacode:'',
        isDefault:'',
        isdefault:'',
      }
    };
  },

  methods: {
    onSave(AddressInfo) {
      this.form = AddressInfo;
      this.form.userid = store.state.userid
      this.form.addressdetail= AddressInfo.addressDetail;
      this.form.areacode= AddressInfo.areaCode;
      this.form.isdefault= AddressInfo.isDefault;
      let url= `${HOST}/address/update`
      axios.post(url,this.form).then(res => {
        console.log(res.data)
        this.$router.go(-1)
        Toast.success('修改成功');
      })

    },
    onDelete() {
      let url= `${HOST}/address/del/${this.form.id}`
      axios.post(url).then(res=>{
        console.log(res.data)
        this.$router.go(-1)
        Toast.success('删除成功');
      });
    },
    changeDefault(AddressInfo){
      AddressInfo.isDefault = !AddressInfo.isDefault;
    },

    back(){
      this.$router.go(-1)
    },
    getData(){
      let url= `${HOST}/address/selbyid/${this.form.id}`
      axios.get(url).then(res=>{
        console.log(res.data)
        this.form = res.data;
        this.AddressInfo = this.form;
        this.AddressInfo.addressDetail = this.form.addressdetail;
        this.AddressInfo.areaCode = this.form.areacode;
        this.AddressInfo.isDefault = this.form.isdefault;
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
