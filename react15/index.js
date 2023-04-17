/*
 * Author: yuanzhirong
 * Date: 2023-04-14 13:58:51
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 15:24:03
 * Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import BasicMap from "./src/router/index.jsx";
import "./index.scss";

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById("app-react"));
};

if (!window.__MICRO_WEB__) {
  render()
}

export const bootstrap = () => {
  console.log("开始加载");
};

export const mount = () => {
  render();
  console.log("渲染成功");
};

export const unmount = () => {
  console.log("卸载");
};
