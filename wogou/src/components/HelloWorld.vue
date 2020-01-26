<template>
  <div id="zong">
    <div class="header">
      <router-view />
    </div>
    <div class="nav">
      <ul class="iconfont">
        <li @click="tiaozhuan('home',0)" :class="{bian:login==0}">
          <p class="icon">&#xe61e;</p>
          <p class="ziti">首页</p>
        </li>
        <li @click="tiaozhuan('cyclopedia',1)" :class="{bian:login==1}">
          <p class="icon">&#xe691;</p>
          <p class="ziti">百科</p>
        </li>
        <li @click="tiaozhuan('message',2)" :class="{bian:login==2}">
          <p class="icon">&#xe61f;</p>
          <p class="ziti">资讯</p>
        </li>
        <li @click="tiaozhuan('faqs',3)" :class="{bian:login==3}">
          <p class="icon">&#xe639;</p>
          <p class="ziti">问答</p>
        </li>
        <li @click="tiaozhuan('my',4)" :class="{bian:login==4}">
          <p class="icon">&#xe620;</p>
          <p class="ziti">我的</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "helloWorld",
  data: function() {
    return {
      login: 0
    };
  },
  methods: {
    tiaozhuan(item, inx) {
      this.$router.push({ name: item });
      this.login = inx;
    }
  }
};
</script>

<style scoped>
#zong {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
}
#zong .header {
  flex: 1;
}
#zong .nav {
  height: 1.2rem;
  padding: 0.1rem;
  box-shadow: 0px 0px 0.1rem 0px #000000;
}
.nav ul {
  display: flex;
}
.nav ul li {
  width: 20%;
  text-align: center;
}
.nav ul li .icon {
  font-size: 30px;
}
.nav ul li .ziti {
  margin-top: 0.2rem;
  font-size: 12px;
}
.bian {
  color: dodgerblue;
}
</style>
