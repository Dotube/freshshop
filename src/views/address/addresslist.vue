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
    />

  </div>

</template>

<script>
import { Toast } from 'vant';
import axios from 'axios'
import {HOST} from '../../common/config'
import store from "@/store/store";

export default {
  name: "addresslist",

  data() {
    return {
      chosenAddressId: '1',
      addressInfo:[],
      list: [
        {
          id: '',
          name: '',
          tel: '',
          address: '',
        },
      ],
    };
  },
  methods: {
    onAdd() {
      this.$router.push("/addressadd")
    },
    onEdit(item, index) {
     let id = index +1;
      this.$router.push('/addressedit/?id='+id)
      Toast('编辑地址:' + id);
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
        this.list[i].tel=this.addressInfo[i].phone;
      }


    })
  }


}


</script>

<style scoped>

</style>
