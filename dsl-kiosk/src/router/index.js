import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView";
import CheckInView from "@/views/checkIn/CheckInView";
import CheckOutView from "@/views/checkOut/CheckOutView";
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
    path: "/check-in",
    component: CheckInView,
    children: [
      {
        path: "",
        name: "CourierSignIn",
        component: CourierSignIn,
      },
    ],
  },
  {
    path: "/check-out",
    component: CheckOutView,
    // children: [
    //   {
    //     path: "",
    //     name: "CourierSignIn",
    //     component: CourierSignIn,
    //   },
    // ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
