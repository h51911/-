<template>
  <div>
    <mt-swipe :auto="4000" id="zong">
      <mt-swipe-item>
        <img src="../image/1351267715.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/1352696723.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/1380287638.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/20140522005037.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/20140524184855.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/20140612125054.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/20141020192555.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../image/20141021191845.jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="ggzx">
      <div class="herder">
        <h2>狗狗资讯</h2>
        <p>进入资讯频道 ></p>
      </div>
    </div>
    <ul class="ggnav">
      <li v-for="item in arrs" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function() {
    return {
      arrs: ["训练", "饲养", "娱乐"]
    };
  },
  methods: {
    navs() {
      window.console.log(666);
    }
  }
};
</script>

<style scoped>
#zong {
  width: 100%;
  height: 5.5rem;
}
#zong img {
  width: 100%;
  height: 100%;
}
.ggzx {
  margin-top: 0.3rem;
}
.ggzx .herder {
  border-bottom: solid 1px #1aa5a2;
  border-top: solid 1px #1aa5a2;
  background: -webkit-gradient(linear, 0 0, 0 100%, from(#d7faf7), to(#f4fffe));
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
}
.ggzx .herder h2 {
  border: solid 1px #1aa5a2;
  border-bottom: none;
  height: 0.7rem;
  margin-bottom: -1px;
  position: relative;
  z-index: 2;
  float: left;
  padding: 0 0.2rem;
  margin-top: 0.1rem;
  font-size: 16px;
  color: #00aca6;
  border-radius: 0.2rem 0.2rem 0 0;
  background: #f3f3f3;
}
.ggzx .herder p {
  float: right;
  font-size: 14px;
  border-radius: 0.1rem;
  border: solid 1px #00918c;
  background: #00ccc5;
  color: #fff;
  padding: 0 0.2rem;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.1rem;
}
.ggnav {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #00918c;
  text-align: center;
}
.ggnav li {
  width: 33%;
  height: 0.8rem;
  line-height: 0.8rem;
}
</style>
