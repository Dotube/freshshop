<template>
  <div>
    <div class="history">
      <div class="top">
        <h4>历史记录</h4>
        <van-icon name="delete-o" />
      </div>
      <div class="down">
        <van-tag plain type="default">烘焙</van-tag>
        <van-tag plain type="default">橘子</van-tag>
        <van-tag plain type="default">香蕉</van-tag>
        <van-tag plain type="default">青菜</van-tag>
        <van-tag plain type="default">奶茶</van-tag>
      </div>
    </div>
    <div class="history">
      <div class="top">
        <h4>热门搜索</h4>
        <van-icon name="delete-o" />
      </div>
      <div class="down">
        <van-tag plain type="danger">烘焙</van-tag>
        <van-tag plain type="default">橘子</van-tag>
        <van-tag plain type="default">香蕉</van-tag>
        <van-tag plain type="default">青菜</van-tag>
        <van-tag plain type="default">奶茶</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "history"
}
</script>

<style scoped>
.history{
  padding: 0 2%;
  background-color: #fff;
  margin-bottom: 0.05rem;
}

.top{
  display: flex;
  height: 0.5rem;
  font-size: 0.2rem;
  align-items: center;
  justify-content: space-between;
}

h4{
font-weight: normal;
}

.van-tag{
  font-size: 0.14rem;
  margin-right:0.1rem;
  margin-bottom: 0.1rem;
  padding: 0.03rem;
}
</style>
