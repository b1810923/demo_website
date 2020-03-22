import Vue from "vue";
import router from "./router/index.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Index from "./Index.vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(Index),
  router
}).$mount("#app");
