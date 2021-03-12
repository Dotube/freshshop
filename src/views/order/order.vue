<template>
<div>
  <button @click="back">test</button>
</div>
</template>

<script>
export default {
name: "order",
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

</style>
