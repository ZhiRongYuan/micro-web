/*
 * Author: yuanzhirong
 * Date: 2023-04-13 17:47:03
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 15:22:54
 * Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let instance = null;
const render = () => {
  instance = createApp(App);
  instance.use(router).mount("#app");
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
