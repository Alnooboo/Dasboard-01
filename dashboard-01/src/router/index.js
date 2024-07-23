import { createRouter, createWebHistory } from "vue-router";
import Screen from "../views/Screen.vue";
import Billing from "../views/Billing.vue";

const routes = [
  {
    name: "screen",
    path: "/",
    component: Screen,
  },
  {
    name: "Billing&Plans",
    path: "/applications/Users/View/Billing&Plans",
    component: Billing,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "screen" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
