import { createWebHistory, createRouter } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ResumeView from "../views/ResumeView.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumeView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
