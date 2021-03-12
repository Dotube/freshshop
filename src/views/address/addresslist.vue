<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="地址列表" left-text="返回" left-arrow  @click-left="onClickLeft">
      </van-nav-bar>
    </div>
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
    />

  </div>

</template>

<script>

import axios from 'axios'
import {HOST} from '../../common/config'
import store from "@/store/store";

export default {
  name: "addresslist",

  data() {
    return {
      chosenAddressId: store.state.addressid,
      addressInfo:[],
      addressDetail:[],
      list: [
        {
          id: '',
          name: '',
          tel: '',
          address: '',
          isDefault:''
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressadd")
    },
    onSelect(list){
      store.state.addressid = list.id
    },
    onEdit(list) {
     let id = list.id
      this.$router.push('/addressedit/?id='+id)
    },
    onClickLeft() {
      this.$router.go(-1)
    },

  },
  created() {
    let url = `${HOST}/address/selbyuser/${store.state.userid}`;
    axios.post(url).then(res => {
      console.log(res.data)
      this.addressInfo = res.data
      this.list = this.addressInfo;
      for(let i=0;i<this.list.length;i++)
      {
        this.list[i].address = this.addressDetail.concat(this.addressInfo[i].province,this.addressInfo[i].city,this.addressInfo[i].county,this.addressInfo[i].addressdetail)   ;
      }

      for(let i=0;i<this.list.length;i++)
      {
        this.list[i].isDefault=this.addressInfo[i].isdefault;
      }

    })
  }


}


</script>

<style scoped>

</style>
