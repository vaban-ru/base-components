import Vue from "vue";
import VueRouter from "vue-router";
import Buttons from "../views/ButtonsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/buttons",
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
