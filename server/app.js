// app.js
var koa = require("koa");

var app = koa();

var routes = require("koa-route");
var parse = require("co-body");

var createTodoList = function() {
  return [
    {id: 1, priority: 1, description: "Buy more beer"},
    {id: 2, priority: 1, description: "Order pizza"},
    {id: 3, priority: 2, description: "Eat pie"},
    {id: 4, priority: 4, description: "Watch TV"},
    {id: 5, priority: 5, description: "Sleep"}
  ];
}
var todoList = [];

var getTodoList = function() {
  if (todoList.length === 0) {
    todoList = createTodoList();
  }
  return todoList;
};


var sendTodoList = function*() {
  this.body = getTodoList();
};

app.use(routes.get("/todoList", sendTodoList));

module.exports = app;
