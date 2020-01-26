<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./icon/iconfont.css";
export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
html {
  width: 100%;
  height: 100%;
  font-size: 12.26vw;
}
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
