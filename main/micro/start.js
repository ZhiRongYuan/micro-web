/*
 * Author: yuanzhirong
 * Date: 2021-12-21 14:24:53
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-19 14:03:59
 * Description:
 */
import { setMainLifecycle } from "./const/mainLifeCycle";
import { setList, getList } from "./const/subApps";
import { rewriteRouter } from "./router/rewriteRouter";
import { currentApp } from "./utils";

// 实现路由拦截
rewriteRouter();

export const registerMicroApps = (appList, lifeCycle) => {
  setList(appList);

  setMainLifecycle(lifeCycle)
};

// 启动微前端框架
export const start = () => {
  // 首先验证当前子应用列表是否为空
  const apps = getList();

  if (!apps.length) {
    // 子应用列表为空
    throw Error("子应用列表为空， 请正确注册");
  }

  // 有子应用的内容， 查找到符合当前路由的子应用
  const app = currentApp();

  const { pathname, hash } = window.location;

  if (!hash) {
    // 当前没有在使用的子应用
    // 1. 抛出一个错误，请访问正确的连接
    // 2. 访问一个默认的路由，通常为首页或登录页面
    window.history.pushState(null, null, "/vue3#/index");
  }

  if (app && hash) {
    const url = pathname + hash;

    window.__CURRENT_SUB_APP__ = app.activeRule;

    //window.history.pushState("", "", url);
  }
};
