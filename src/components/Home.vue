<template>
  <div class="home">
    <div class="homeItemLeft">
      <img class="imageSmall" src="@/assets/home/images/SmallPic.jpg" />
      <img class="imageBig" src="@/assets/home/images/BgPic.png" />
    </div>
    <div class="homeItemRight">
      <iframe
        scrolling="no"
        src="https://tianqiapi.com/api.php?style=ty&skin=pitaya"
        frameborder="0"
        width="300"
        height="75"
        allowtransparency="true"
      ></iframe>
      <div class="introduction">
        <h1>至少我们有过幸福</h1>
        <h1>好吧...</h1>
        <h1>我真的很想你</h1>
      </div>
      <div class="diary" v-html="this.diary"></div>
      <div class="learnmore">
        <router-link to="Detail"><h5>learn more</h5></router-link>
        <img src="@/assets/home/images/ArrowLeft.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        diary:'你干嘛哎呦'
    }
  },
  props:['isSwitch'],
  methods: {
    getDiary(){
        this.$axios.get('https://v.api.aa1.cn/api/tiangou/index.php').then((result) => {
            this.diary = result.data
        })
    }
  },
  mounted(){
    this.getDiary()
  }
};
</script>

<style scoped>
 

@keyframes smallPic{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}
.home {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.home .homeItemLeft {
  margin-left: 30px;
  width: 500px;
  height: 500px;
  position: relative;
}

.home .homeItemLeft .imageSmall {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 0;
  top: 50px;
  border-radius: 10px;
  z-index: 1;
  opacity: 0.9;
  box-shadow: 2px 30px 30px skyblue;
  animation: smallPic 2s;
}

.home .homeItemLeft .imageBig {
  position: absolute;
  right: 0;
  top: 0;
  width: 352px;
  height: 500px;
  opacity: 1;
  border-radius: 17px;
}

.home .homeItemRight {
  margin: 10px 50px 0 0;
  width: 540px;
  height: 451px;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.home .homeItemRight .introduction {
  height: 180px;
  /* font-family: '钉钉进步体 Regular'; */
  /* width: 100%; */
  /* background-color: black; */
}


.home .homeItemRight .diary{
    font-size: small;
}

.home .homeItemRight .learnmore {
  display: flex;
  align-items: center;
  height: 28px;
}

.home .homeItemRight .learnmore h5 {
  color: gray;
  line-height: 28px;
  display: inline-block;
}

.home .homeItemRight .learnmore img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.home .homeItemRight .learnmore:hover {
  font-size: large;
  text-shadow: 2px 2px 5px gray;
  transition: 0.3s all;
}


</style>