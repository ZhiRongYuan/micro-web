/*
 * Author: yuanzhirong
 * Date: 2021-12-21 14:24:53
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-06-27 00:50:20
 * Description:
 */
import { setList } from "./const/subApps";
import { rewriteRouter } from "./router/rewriteRouter";

// 实现路由拦截
rewriteRouter();

export const registerMicroApps = (appList) => {
  setList(appList);
};
