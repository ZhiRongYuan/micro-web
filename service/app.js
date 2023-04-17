/*
 * Author: yuanzhirong
 * Date: 2023-04-17 09:55:16
 * LastEditors: yuanzhirong
 * LastEditTime: 2023-04-17 09:56:59
 * Description:
 */
var app = require("koa")(),
  logger = require("koa-logger"),
  json = require("koa-json"),
  views = require("koa-views"),
  onerror = require("koa-onerror");

var index = require("./routes/index");
var users = require("./routes/users");
var vue2 = require("./routes/vue2")

// error handler
onerror(app);

// global middlewares
app.use(require("koa-bodyparser")());
app.use(json());
app.use(logger());

app.use(function* (next) {
  var start = new Date();
  yield next;
  var ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});

app.use(require("koa-static")(__dirname + "/public"));

// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(vue2.routes(), vue2.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
