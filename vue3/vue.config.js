/*
 * Author: yuanzhirong
 * Date: 2023-04-13 17:17:56
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 10:59:15
 * Description:
 */
const path = require("path");
const { name } = require("./package");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9005;

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  filenameHashing: true,
  publicPath: "http://localhost:9005",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    disableHostCheck: true,
    port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/vue3": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      libraryTarget: "umd",
      filename: "vue3.js",
      library: "vue3",
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
