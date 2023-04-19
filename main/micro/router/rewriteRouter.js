/*
 * Author: yuanzhirong
 * Date: 2023-04-18 17:09:48
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-19 11:26:35
 * Description:
 */
import { patchRouter } from "../utils";
import { turnApp } from "./routerHandle";

// 重写window的路由跳转
export const rewriteRouter = () => {
  window.history.pushState = patchRouter(
    window.history.pushState,
    "micro_push"
  );
  window.history.replaceState = patchRouter(
    window.history.replaceState,
    "micro_replace"
  );

  window.addEventListener("micro_push", turnApp);
  window.addEventListener("micro_replace", turnApp);
  // 监听返回事件
  window.onpopstate = async function () {
    await turnApp();
  };
};
