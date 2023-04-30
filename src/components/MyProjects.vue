<template>
  <div>
    <div class="projects">
      <div class="card">
        <div class="box">
          <div class="picture">
            <img
              class="projectsImg1"
              src="../assets/projects/weatherLogo.png"
              alt=""
            />
          </div>
          <div class="name">
            <p>落光天气app</p>
          </div>
          <div class="jobtitle">
            <p>
              免费无广查询天气<br />微信搜索落光天气即可体验<br />或者点击下方链接下载app
            </p>
          </div>
          <div class="buttons">
            <div class="button1">
              <a href="http://weather.luoguang.icu"
                ><button>点击我进入web端预览</button></a
              >
            </div>
            <div class="button2">
              <a
                href="https://gitee.com//luoguangguang/luoguang-weather/releases/download/2.4.1/__UNI__EF86916__20230423133442.apk"
                ><button>点击我下载app</button></a
              >
            </div>
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
    return {};
  },
};
</script>

<style scoped lang="less">
// pc端样式
@media screen and(min-width:1200px) {
  .card {
    margin: 40px auto;
    width: 1200px;
    height: 300px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.212);
    background: #fff;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    position: relative;
    transition: all 0.4s;
  }

  .card::before {
    content: "更多详情以及源代码请到我的gitee仓库查看----https://gitee.com/luoguangguang/luoguang-weather";
    letter-spacing: 0.2em;
    position: absolute;
    bottom: 8px;
    left: 20px;
    color: rgb(51, 51, 51);
    font-size: 0.8em;
    font-weight: 700;
  }

  .card .box {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.212);
    cursor: pointer;
    z-index: 10;
    transition: all 0.4s;
    background-color: #fff;
  }

  .card:hover div {
    transform: translateY(-30px);
  }

  .card .picture,
  .card .name,
  .card .jobtitle,
  .card .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .picture {
    border: 2px solid #d9e6ea;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    margin: auto;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .projectsImg1 {
    height: 80px;
    width: 80px;
  }

  .buttons > div {
    padding: 0.5em;
  }

  button {
    padding: 0.5em;
    outline: none;
    background: transparent;
    border: 1px solid #0f0f0f6b;
    border-radius: 0.4em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: all 0.3s;
    font-size: 0.7em;
  }

  .card .picture:hover,
  button:hover {
    background: #d9e6ea;
    color: #f1f5f3;
  }

  .card .name p {
    margin-top: 8px;
    margin-bottom: 5px;
    font-size: 1em;
  }

  .card .jobtitle p {
    margin-bottom: 2%;
    font-size: 0.54em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
  }
}

@media screen and(max-width: 767px) {
    .card {
    margin: 40px auto;
    width: 300px;
    height: 300px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.212);
    background: #fff;
    display: flex;
    border-radius: 20px;
    justify-content: center;
    position: relative;
    transition: all 0.4s;
  }


  .card .box {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.212);
    cursor: pointer;
    z-index: 10;
    transition: all 0.4s;
    background-color: #fff;
  }


  .card .picture,
  .card .name,
  .card .jobtitle,
  .card .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card .picture {
    border: 2px solid #d9e6ea;
    height: 100px;
    width: 100px;
    border-radius: 100%;
    margin: auto;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .projectsImg1 {
    height: 80px;
    width: 80px;
  }

  .buttons > div {
    padding: 0.5em;
  }

  button {
    padding: 0.5em;
    outline: none;
    background: transparent;
    border: 1px solid #0f0f0f6b;
    border-radius: 0.4em;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: all 0.3s;
    font-size: 0.7em;
  }

  .card .picture:active,
  button:active {
    background: #d9e6ea;
    color: #f1f5f3;
  }

  .card .name p {
    margin-top: 8px;
    margin-bottom: 5px;
    font-size: 1em;
  }

  .card .jobtitle p {
    margin-bottom: 2%;
    font-size: 0.54em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
  }
}
</style>