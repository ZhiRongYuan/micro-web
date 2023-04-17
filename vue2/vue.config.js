/*
 * Author: yuanzhirong
 * Date: 2023-04-13 15:51:13
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 10:29:46
 * Description: 
 */
const path = require('path');
const { name } = require('./package');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9004;

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: 'http://localhost:9004',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      "/vue2": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      libraryTarget: 'umd',
      filename: 'vue2.js',
      library: 'vue2',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
