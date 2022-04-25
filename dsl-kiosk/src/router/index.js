import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import DepositView from "@/views/deposit/DepositView";
import CourierSignIn from "@/components/courier/CourierSignIn";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomeView,
  },
  {
    path: "/deposit",
    // name: "Deposit",
    component: DepositView,
    children: [
      {
        path: "",
        name: "CourierSignIn",
        component: CourierSignIn,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
