import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import CheckInView from "@/views/checkIn/CheckInView";
import CheckOutView from "@/views/checkOut/CheckOutView";
import LockersView from "@/views/lockerView/LockersView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/check-in",
    name: "check-in",
    component: CheckInView,
  },
  {
    path: "/check-out",
    name: "check-out",
    component: CheckOutView,
  },
  {
    path: "/lockers",
    name: "lockers",
    component: LockersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
