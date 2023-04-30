<template>
  <div class="footer">
    <div style="width: 300px; margin: 0 auto; padding: 20px 0">
      <img src="@/assets/footer/images/beian.png" alt="" />
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=52062602001033"
        style="
          display: inline-block;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        "
        ><img src="" style="float: left" />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >
          贵公网安备 52062602001033号
        </p></a
      ><p>黔ICP备2023001147号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  margin: 10px;
}
</style>