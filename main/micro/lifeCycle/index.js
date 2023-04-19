/*
 * Author: yuanzhirong
 * Date: 2023-04-19 11:29:23
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-19 11:44:21
 * Description:
 */
import { findAppByRoute } from "../utils";
import { getMainLifecycle } from "../const/mainLifeCycle";
import { loadHtml } from "../loader";

export const lifecycle = async () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ORIGIN_APP__);

  // 获取到要跳转到的子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__);

  if (!nextApp) {
    return;
  }

  if (prevApp && prevApp.unmount) {
    await destoryed(prevApp);
  }

  const app = await beforeLoad(nextApp);

  await mounted(app);
};

export const beforeLoad = async (app) => {
  await runMainLifeCycle("beforeLoad");
  app && app.beforeLoad && app.beforeLoad();

  const subApp = await loadHtml(app); // 获取的是子应用的内容
  subApp && subApp.beforeLoad && subApp.beforeLoad();

  return subApp;
};

export const mounted = async (app) => {
  app &&
    app.mount &&
    app.mount({
      appInfo: app.appInfo,
      entry: app.entry,
    });

  await runMainLifeCycle("mounted");
};

export const destoryed = async (app) => {
  app && app.unmount && app.unmount();

  // 对应的执行以下主应用的生命周期
  await runMainLifeCycle("destoryed");
};

export const runMainLifeCycle = async (type) => {
  const mainLife = getMainLifecycle();
  console.log(mainLife, type);
  await Promise.all(mainLife[type].map(async (item) => await item()));
};
