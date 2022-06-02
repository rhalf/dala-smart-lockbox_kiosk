import Vue from "vue";
import Vuex from "vuex";

import loading from "./modules/loading";
import dialog from "./modules/dialog";
// import size from "../store/modules/size"
import locker from "./modules/locker";
// import status from "../store/modules/status"
// import company from "../store/modules/company"
import otp from "../store/modules/otp";
import order from "../store/modules/order";
import courier from "./modules/courier";
import rider from "./modules/rider";
// import transaction from "../store/modules/transaction"
import cu48b from "./modules/cu48b";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loading,
    dialog,
    // size,
    locker,
    order,
    // status,
    // company,
    otp,
    // parcel,
    courier,

    rider,
    // transaction,
    cu48b,
  },
});
