import React from "react";
import "./index.scss";
import ReactDOM from "react-dom";
import BasicMap from "./src/router";

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById("app-react"));
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
  console.log("卸载");
};
