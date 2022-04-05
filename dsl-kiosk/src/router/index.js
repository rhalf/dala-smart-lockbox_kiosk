import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import DepositView from "@/views/DepositView";
import CourierView from "@/views/CourierView";

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
        name: "Courier",
        component: CourierView,
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
