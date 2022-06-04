import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import CheckInView from "@/views/checkIn/CheckInView";
import CheckOutView from "@/views/checkOut/CheckOutView";
import LockerView from "@/views/lockerViewer/LockerView";
import TransactionView from "@/views/TransactionViewer/TransactionView";

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
    path: "/check-in",
    component: CheckInView,
  },
  {
    path: "/check-out",
    component: CheckOutView,
  },
  {
    path: "/locker-viewer",
    component: LockerView,
  },
  {
    path: "/transaction-viewer",
    component: TransactionView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
