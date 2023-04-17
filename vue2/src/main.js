/*
 * Author: yuanzhirong
 * Date: 2023-04-13 15:58:24
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 15:22:46
 * Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let instance = null;
const render = () => {
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app-vue");
};

if (!window.__MICRO_WEB__) {
  render();
}

export const bootstrap = () => {
  console.log("开始加载");
};

export const mount = () => {
  render();
  console.log("渲染成功");
};

export const unmount = () => {
  console.log("卸载", instance);
};
