import Vue from "vue";
import Vuex from "vuex";

import loading from "./modules/loading";
import dialog from "./modules/dialog";
import verification from "./modules/verification";
import locker from "./modules/locker";
import otp from "./modules/otp";
import order from "./modules/order";
import cu48b from "./modules/cu48b";
import token from "./modules/token";
import connection from "./modules/connection";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    dialog,
    locker,
    order,
    verification,
    otp,
    cu48b,
    token,
    connection,
  },
});
