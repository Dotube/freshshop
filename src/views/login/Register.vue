<template>
  <div id="register">
  <div class="navbar">
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="onClickLeft">
    </van-nav-bar>
  </div>
  <div class="registerform" >
    <van-form @submit="onSubmit">
      <van-field
          v-model="form.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="form.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button  block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {HOST} from '../../common/config'
export default {
name: "Register",
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onSubmit(values) {
      let url= `${HOST}/user/register`
      console.log('submit', values);
      axios.post(url,this.form).then(res=>{
        console.log(res.data)
        let response =res.data;
        switch (response.msg){
          case '0':
            this.$toast.success('注册成功！')
            this.$router.go(-1)
            break;
          case '2':
            this.$toast.fail('用户名已存在！')
        }

      })
    },
  },
  data() {
    return {
      form:{
        name: '',
        password: '',
        icon:'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3GiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKOlABRVS4vo4eActWdLqEsh7D6UAblFc4biUn77fnTlu5VP3ifqaAOhorKh1Q5AkHHsK0o5UlXKmgB9FFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZd9fYzHGfqas39x5MWAfmPSsMkk5NACEknJooooAKKKKACpre4eBwQeO4qGigDo7edZ49w/EVLWDZXBhlAJ+U9a3QcgGgBaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg8CimyHETH2NAGJqEpkuWXsp4qpT5G3SMfWmUAFFFFABRRRQAUUUUAFb1jL5tuCetYNamktksvoKANSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApk3+pf8A3TT6a4zGw9qAOaPBNJUky7ZmHoajoAKKKKACiiigAooooAK0tJH71z7Vm1raUmFLetAGlRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAYeoxeXcFuzHiqdb97bieI4+8OlYLKVYg9RQAlFFFABRRRQAUUUUAFb9lF5VuAetZlhbedJuYfKK3AMDFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFZeoWf/LRB9RWpTXUMpU96AOZoqW5j8u4dR0BqKgAooooAKkghaaQKPxqOtjS4QIvM7nigC3BCsMYUD61LRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABQTgZpCQBknis+9vlVSkZyT3oAoXrBrp8etV6CcnJooAKKKKACtzTXDWoHfJrDqxa3Jt5M9j1oA6CiooZ0mUFSM+lS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFRyzxxDLMB7ZoAkqCe7jgHzHn0rOuNSZ8rHwPeqDMWOSc0AW7i/klOFO0e1UycmiigAooooAKKKKACiiigB8czxHKMRWnb6mrYWTg+tZNFAHTqwcAg8GlrnobqSA/KeK1LfUI5cBjtPuaALtFICCMg5FLQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUhIAyaWsi/vCzGNDx3oAnutRVMrHyaypJnlOXYn6mmUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFAODkUUUAXLe/khOGO4e5rWguEnXKmudqSKVoXDKaAOkoqC1nE8Qbv3qegAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACubm/17/7xrpK5u4UrO+fU0AR0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBr6T/qX/3q0az9KUiB89zWhQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVWexjnOTwfarVFAGd/ZEX/AD0aj+yIv+ejVo0UAZ39kRf89Go/siL/AJ6NWjRQBnf2RF/z0aj+yIv+ejVo0UAZ39kRf89Go/siL/no1aNFAGd/ZEX/AD0aj+yIv+ejVo0UAZ39kRf89Go/siL/AJ6NWjRQBnf2RF/z0aj+yIv+ejVo0UAZ39kRf89Go/siL/no1aNFAGd/ZEX/AD0alXSogc72NaFFADI41jUKo4p9FFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/2Q=='
      }

    };
  },

}
</script>

<style scoped>
.registerform{
  margin-top: 5px;
}
</style>
