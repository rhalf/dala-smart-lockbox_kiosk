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
    name: "Home",
    component: HomeView,
  },
  {
    path: "/check-in",
    name: "CheckIn",
    component: CheckInView,
  },
  {
    path: "/check-out",
    name: "CheckOut",
    component: CheckOutView,
  },
  {
    path: "/lockers",
    name: "Lockers",
    component: LockersView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
