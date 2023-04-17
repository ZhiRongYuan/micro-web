/*
 * Author: yuanzhirong
 * Date: 2023-04-17 10:23:38
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 11:26:15
 * Description:
 */
var router = require("koa-router")();

router.prefix("/vue2");

router.get("/car/list", function (ctx, next) {
  ctx.body = [
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
    {
      img: "https://p3.dcarimg.com/img/motor-article-img/acf36ccc5843420aa4bd0c694569f4d8~500x0.webp",
      name: "五菱缤果",
      number: "3026",
      type: "导购",
      status: true,
    },
  ];
});

module.exports = router;
