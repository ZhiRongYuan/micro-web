/*
 * Author: yuanzhirong
 * Date: 2023-04-14 13:58:51
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 11:09:26
 * Description:
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    path: ["./index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "react15.js",
    library: "react15",
    libraryTarget: "umd",
    umdNamedDefine: true,
    publicPath: "http://localhost:9002/",
  },
  module: {
    rules: [
      {
        test: /\.js(|x)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(c|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  optimization: {
    splitChunks: false,
    minimize: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9002,
    historyApiFallback: true,
    hot: true,
    proxy: {
      "/react15": {
        target: "http://localhost:3000",
        changeOrigin: true,
      }
    },
  },
};
