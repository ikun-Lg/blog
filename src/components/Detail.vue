<template>
  <div class="detail">
    <div class="introduction">
      <img src="@/assets/home/images/SmallPic.jpg" alt="" />
      <div class="introductionBottom">
        <div class="info">
          <h4>罗广头发不想落光</h4>
          <h4>学校:gay大</h4>
          <h4>性别：苹果</h4>
          <h4>爱好：看美女</h4>
        </div>
        <h5>{{ reping }}</h5>
      </div>
    </div>
    <div class="skills">
      <h1>我的技能</h1>
      <hr />
      <div v-for="(item, index) in skills" :key="index">
        <div class="skillsItem">
          <h2>{{ item.title }}</h2>
          <img
            src="@/assets/home/images/xiaoheizi.jpg"
            alt=""
            v-for="(imageItem, index) in item.how"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      reping: "你干嘛",
      skills: [
        {
          title: "Html",
          how: 3,
        },
        {
          title: "Css",
          how: 2,
        },
        {
          title: "JavaScript",
          how: 1,
        },
        {
          title: "C语言",
          how: 1,
        },
        {
          title: "Vue",
          how: 1,
        },
        {
          title: "Uniapp",
          how: 1,
        },
      ],
    };
  },
  methods: {
    getReping() {
      this.$axios
        .get(
          "https://v.api.aa1.cn/api/api-wenan-wangyiyunreping/index.php?aa1=json"
        )
        .then((result) => {
          this.reping = result.data[0].wangyiyunreping;
        });
    },
  },
  mounted() {
    this.getReping();
  },
};
</script>

<style scoped>
.detail {
  margin: 20px auto;
  width: 100%;
  height: 100%;
}

.detail .introduction {
  width: 1000px;
  height: 250px;
  position: relative;
  margin: 10px auto;
}

.detail .introduction img {
  position: absolute;
  top: 0;
  left: 50px;
  width: 180px;
  height: 180px;
  border-radius: 17px;
  z-index: 1;
}

.detail .introduction .introductionBottom {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 1000px;
  border-radius: 17px;
  background: #fff;
  box-shadow: 29px 10px 10px #c1c1c1, -29px -29px 58px #ffffff;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}

.detail .introduction .introductionBottom .info {
  margin: 20px;
  height: 180px;
  position: relative;
}

.detail .introduction .introductionBottom h5 {
  color: gray;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  margin: auto;
}

.detail .skills {
  margin: 10px auto;
  width: 1000px;
  height: 100%;
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 17px;
  box-shadow: 29px 29px 58px #c1c1c1, -29px -29px 58px #ffffff;
  /* justify-content: space-between; */
}

.detail .skills .skillsItem {
  width: 1000px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  margin: 5px 20px;
  line-height: 60px;
}

.detail .skills .skillsItem img {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  margin: auto 20px;
}
</style>