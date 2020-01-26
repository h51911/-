import Vue from 'vue'
import App from './App.vue'
import "./css/清除默认样式.css"
import router from "./router"
Vue.config.productionTip = false;
import { Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
