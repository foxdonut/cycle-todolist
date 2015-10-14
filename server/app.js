// app.js
var koa = require("koa");

var app = koa();

app.use(function*() {
  this.body = "Hello Koa";
});

module.exports = app;