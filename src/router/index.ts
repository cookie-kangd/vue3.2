import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../components/Home.vue"),
    },
    {
      path: "/helloWorld",
      name: "HelloWorld",
      component: () => import("../components/HelloWorld.vue"),
    },
  ],
});

export default router;
