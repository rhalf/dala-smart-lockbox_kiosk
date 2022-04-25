import Vue from "vue";
import Vuex from "vuex";

import loadingSpinner from "../store/modules/loading-spinner";
// import size from "../store/modules/size"
import locker from "../store/modules/locker";
// import status from "../store/modules/status"
// import company from "../store/modules/company"
// import client from "../store/modules/client"
// import parcel from "../store/modules/parcel"
import courier from "../store/modules/courier";
// import transaction from "../store/modules/transaction"
// import cu48b from "../store/modules/cu48b"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loadingSpinner,
    // size,
    locker,
    // status,
    // company,
    // client,
    // parcel,
    courier,
    // transaction,
    // cu48b
  },

  state: {},
  mutations: {},
  actions: {},
});
