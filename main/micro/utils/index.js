/*
 * Author: yuanzhirong
 * Date: 2022-06-27 00:27:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-06-27 00:55:16
 * Description:
 */
// 给当前的路由跳转打补丁
export const patchRouter = (globalEvent, eventName) => {
  return function () {
    const e = new Event(eventName);
    // console.log(arguments);
    globalEvent.apply(this, arguments);
    window.dispatchEvent(e);
  };
};
