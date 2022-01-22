import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      transitionName: "home-fade",
      title: "Главная",
    },
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/student-works",
    name: "StudentWorks",
    meta: {
      title: "Обзор работ",
    },
    component: () => import("../views/student-works/StudentWorks.vue"),
  },
  {
    path: "/work-review/:id",
    name: "workReview",
    component: () => import("../views/work-review/workReview.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
