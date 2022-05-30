import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import filter from "./filter";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// import axios from "axios";
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  store,
  filter,
  render: (h) => h(App),
}).$mount("#app");
