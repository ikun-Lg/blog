<template>
  <div id="app">
    <Top></Top>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {
     
    }
  },
  components: {
    Top,
    Footer,
  },
  methods: {},
  mounted() {
    //定义一个函数判断是手机端还是pc端
    function isMobile() {
      if (
        window.navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        return true; // 移动端
      } else {
        return false; // PC端
      }
    }
    //    判断后的操作
    if (isMobile()) {
      location.href = "http://luoguang.icu:4/";
      // 判断true跳转到这个主页
    } else {
      // location.href = "http://luoguang.icu";
      // 判断false跳转到这个主页
    }
  },
};
</script>

<style>



.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(-10px);
}

.v-enter-active{
  transition:all 0.3s;
}

.v-enter-to,
v-leave{
  opacity: 1;
  transform: translateX(0px);
}

.v-leave{
  transform: translateX(0px);
  opacity: 1;
}

.v-leave-active{
  transition:all 0.3s;
}

.v-leave-to{
  opacity: 0;
  transform: translateX(-30px);
}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #000;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
