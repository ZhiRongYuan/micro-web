/*
 * Author: yuanzhirong
 * Date: 2022-06-27 00:27:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-19 11:30:07
 * Description:
 */
import { getList } from "../const/subApps";

// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName);
    // console.log(arguments);
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};

export const currentApp = () => {
  const currentUrl = window.location.pathname;
  return filterApp("activeRule", currentUrl);
};

export const findAppByRoute = (router) => {
  return filterApp("activeRule", router);
};

export const filterApp = (key, value) => {
  const currentApp = getList().filter((item) => item[key] === value);

  return currentApp && currentApp.length ? currentApp[0] : {};
};

// 子应用是否做了切换
export const isTurnChild = () => {
  const { pathname } = window.location;

  let prefix = pathname.match(/(\/\w+)/);
  if (prefix) {
    prefix = prefix[0];
  }
  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__;
  if (window.__CURRENT_SUB_APP__ === prefix) {
    return false;
  }
  const currentApp = window.location.pathname.match(/(\/\w+)/);
  if (!currentApp) {
    return;
  }

  window.__CURRENT_SUB_APP__ = currentApp[0];
  return true;
};
