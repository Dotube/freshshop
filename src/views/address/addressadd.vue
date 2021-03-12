<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="新增地址" left-text="返回" left-arrow  @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <div>
      <van-address-edit
          :area-list="areaList"
          @save="onSave"
          show-set-default

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
export default {
name: "addressadd",
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
      let url= `${HOST}/address/add/`;
      this.form = AddressInfo;
      this.form.userid = store.state.userid
      this.form.addressdetail= AddressInfo.addressDetail;
      this.form.areacode= AddressInfo.areaCode;
      this.form.isdefault= AddressInfo.isDefault;
      console.log(this.form)
      axios.post(url,this.form).then(res=>{
        console.log(res.data.state)
        if(res.data.state === 200){
          this.$router.go(-1)
          Toast.success('保存成功！');
        }
      });

    },
    onClickLeft() {
      this.$router.go(-1)
    },
  },
}
</script>

<style scoped>

</style>
