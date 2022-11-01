import { createRouter, createWebHistory } from "vue-router";
import AccountView from "../views/AccountsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AccountView,
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoryView.vue"),
    },
  ],
});

export default router;
