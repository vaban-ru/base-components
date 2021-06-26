import Vue from "vue";
import VueRouter from "vue-router";
import Buttons from "../views/ButtonsPage.vue";
import AlertsPage from "@/views/AlertsPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/button",
  },
  {
    path: "/button",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/alert",
    name: "Alert",
    component: AlertsPage,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
