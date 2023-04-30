<template>
  <div>
    <h1>我的评价是，依托答辩</h1>
    <div class="projects">
      <div
        class="projectsItem"
        v-for="(item, index) in projectsItems"
        :key="index"
      >
        <div class="card">
          <b></b>
          <img src="@/assets/home/images/xiaoheizi.jpg" />
          <div class="content">
            <p class="title">
              {{ item.title }}<br /><span v-html="item.introduction"></span>
            </p>
            <a :href="item.link" target="_blank"
              >点我跳转体验</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
  data() {
    return {
      projectsItems: [
        {
          introduction: "第一个项目,<br />只是为了看美女罢了",
          title: "爱看",
          link: "http://luoguang.icu:2",
        },
        {
          introduction: "第二个项目,<br />庆祝贵大120年校庆。",
          title: "贵大校庆",
          link: "http://luoguang.icu:3",
        },
         {
          introduction: "第三个项目,<br />基于技术栈vue、uniapp,<br>以及uincloud制作微信小程序，<br>已上传微信。",
          title: "落光宝藏阁v1.0.1",
          link: "",
        },
        {
          introduction: "将输入的文字转化为手写<br>敬请期待！！",
          title: "手写模拟器",
          link: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1{
    display: block;
      box-shadow: 20px 20px 21px #bebebe, -20px -20px 21px #ffffff;
}
.projects {
  margin: 10px 0 150px 0;
  /* height: 80vh;
  width: 90vw; */
  display: flex;
  justify-content: space-around;
}

.projects .projectsItem {
  margin: 20px;
  width: 190px;
  height: 254px;
}
/* card */
.card {
  position: relative;
  width: 190px;
  height: 254px;
  background: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, #03a9f4, #ff0058);
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(315deg, #03a9f4, #ff0058);
  filter: blur(30px);
}

.card b {
  position: absolute;
  inset: 6px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.card img {
  border-radius: 10px;
  position: absolute;
  width: 120px;
  height: 120px;
  z-index: 3;
  scale: 0.8;
  opacity: 0.25;
  transition: 0.5s;
}

.card:hover img {
  scale: 0.5;
  opacity: 0.9;
  transform: translateY(-70px);
}

.card .content {
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
}

.card:hover .content {
  transform: scale(1);
  bottom: 25px;
}

.content .title {
  position: relative;
  color: #fff;
  font-weight: 500;
  line-height: 1em;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
}

.content .title span {
  color: #fff;
  font-weight: 300;
  font-size: 0.7em;
}

/* card */
</style>