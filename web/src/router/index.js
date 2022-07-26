import { createRouter,createWebHistory } from 'vue-router'
import PkIndexView from "../views/pk/PkIndexView"
import NotFound from "../views/error/NotFound"
import RanklistIndexView from "../views/ranklist/RanklistIndexView"
import RecordIndexView from "../views/record/RecordIndexView"
import UserBotIndexView from "../views/user/bots/UserBotIndexView"
 
const routes = [
  // 根路径重定向
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "PkIndex",
    component: PkIndexView,
  },
  {
    path: "/404/",
    name: "404NotFound",
    component: NotFound,
  },
  {
    path: "/ranklist/",
    name: "RanklistIndex",
    component: RanklistIndexView,
  },
  {
    path: "/record/",
    name: "RecordIndex",
    component: RecordIndexView,
  },
  {
    path: "/user/bot/",
    name: "UserBotIndex",
    component: UserBotIndexView,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404/"
  }

]



const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
