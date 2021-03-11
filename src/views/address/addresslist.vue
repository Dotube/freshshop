<template>
  <div>
    <div class="navbar">
      <van-nav-bar title="编辑地址" left-text="返回" left-arrow  @click-left="onClickLeft">
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
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
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
    })
  }


}


</script>

<style scoped>

</style>
