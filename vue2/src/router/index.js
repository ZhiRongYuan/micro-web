/*
 * Author: yuanzhirong
 * Date: 2023-04-13 15:52:45
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-13 16:08:22
 * Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Energy from "../pages/energy/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    // 新能源
    path: "/energy",
    name: "Energy",
    component: Energy,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
