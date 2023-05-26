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
    return {};
  },
  components: {
    Top,
    Footer,
  },
  methods: {},
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.v-enter-active {
  transition: all 0.3s;
}

.v-enter-to,
v-leave {
  opacity: 1;
  transform: translateX(0px);
}

.v-leave {
  transform: translateX(0px);
  opacity: 1;
}

.v-leave-active {
  transition: all 0.3s;
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

* {
  box-sizing: border-box;
  margin: 0 auto;
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
