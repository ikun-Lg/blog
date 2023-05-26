<template>
  <div class="detail">
    <div class="introduction">
      <img src="../assets/detail/jianli.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">


@media screen and (min-width:1200px) {
  .introduction{
  width: 400px;
  margin: 20px auto;
}
}

@media screen and (max-width:1199px) {
  .introduction{
  width: 98vw;
  margin: 20px auto;
}
}

.introduction img{
  width: 100%;
}
</style>