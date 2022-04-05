import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import "@mdi/font/css/materialdesignicons.css";

import dala from "../themes/dala";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    themes: {
      light: dala,
    },
  },
});
