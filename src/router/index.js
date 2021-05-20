import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "main",
    component: () => import("../views/main-layout.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: `${process.env.BASE_URL}/weather-forecast/`,
  routes,
});

export default router;
