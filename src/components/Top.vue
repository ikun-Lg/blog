<template>
  <div class="top">
    <a href="http://www.luoguang.icu"><h1>落光学习</h1></a>
    <div class="nav">
      <router-link to="Home"><div class="navItem">Home</div></router-link>
      <router-link to="MyNotes" class="myNotes"
        ><div class="navItem">My Notes</div></router-link
      >
      <router-link to="MyProjects"
        ><div class="navItem">My Projects</div></router-link
      >
      <router-link to="ContactMe"
        ><div class="navItem">Contact Me</div></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {};
  },
  props: ["isSwitch"],
  methods: {},
};
</script>

    
<style scoped lang="less">
// pc端样式
@media screen and (min-width: 1200px) {
  .top {
    margin-bottom: 5px;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 80px;
    border-bottom: 1px gray solid;
  }

  .top h1 {
    margin-left: 20px;
    display: block;
    /* -webkit-user-drag: none; */
    text-shadow: 2px 2px 5px gray;
    user-select: none;
  }

  .top .nav {
    height: 80px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-around;
    line-height: 80px;
    margin-right: 10px;
  }
  .top .nav .navItem {
    margin: 0 10px;
    font-size: large;
  }
  .top .nav .navItem:hover {
    text-shadow: 2px 2px 5px gray;
    font-size: larger;
    transition: 0.3s all;
  }
}

// 手机端
@media screen and(max-width:1199px) {
  .top {
    margin-bottom: 10px;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    line-height: 40px;
    border-bottom: 1px gray solid;
    width: 100%;
  }

  .top h1 {
    width: 80px;
    font-size: 20px;
    text-shadow: 2px 2px 5px gray;
    margin-right: 20px;
    margin-left: 10px;
  }

  .top .nav {
    width: 100%;
    height: 40px;
    /* background-color: pink; */
    display: flex;
    justify-content: space-around;
    line-height: 40px;
  }
  .top .nav .navItem {
    margin: 0 2px;
    // width: 50px;
    font-size: 16px;
    font-weight: 400;
  }

  .myNotes{
    display: none;
  }
 

  .top .nav .navItem:active {
    text-shadow: 2px 2px 5px gray;
    font-size: 20px;
    transition: 0.3s all;
  }
}
</style>