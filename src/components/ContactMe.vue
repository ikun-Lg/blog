<template>
  <div class="contact">
    <div class="contactLeft">
      <div class="contactLeftTop">
        <h3>如果你也对前端感兴趣，</h3>
        <h3>如果你也对平面设计感兴趣，</h3>
        <h3>或者是后端大佬，</h3>
        <h3>可以联系我，</h3>
        <h1>我们一起做项目啊！</h1>
      </div>
      <div class="conactLeftBottom">
        <h4>QQ:1493170339</h4>
        <h4>邮箱：1493170339@qq.com</h4>
        <h4>tel:17384165534</h4>
        <a href="https://github.com/ikun-Lg" style="color:blue">Enter my github blog</a>
      </div>
    </div>
    <div class="contactRight">
      <img src="@/assets/contact/images/weixin.jpg" alt="" class="imageSmall" />
      <img
        src="@/assets/contact/images/Placeholder.png"
        alt=""
        class="imageBig"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped>
@keyframes smallPic {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.contact {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.contact .contactLeft {
  width: 500px;
  height: 500px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact .contactRight {
  position: relative;
  width: 500px;
  height: 500px;
  /* background-color: pink; */
}

.contact .contactRight .imageSmall {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 50px;
  border-radius: 10px;
  z-index: 1;
  opacity: 0.9;
  box-shadow: 2px 30px 30px white;
  animation: smallPic 2s;
}

.contact .contactRight .imageBig {
  position: absolute;
  top: 0;
  right: 0;
  width: 352px;
  height: 500px;
  border-radius: 17px;
}
</style>