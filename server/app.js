// app.js
var koa = require("koa");

var app = koa();

var routes = require("koa-route");
var parse = require("co-body");
var serve = require("koa-static");

app.use(serve("public"));

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


var onTodoList = function*() {
  this.body = getTodoList();
};

app.use(routes.get("/todoList", onTodoList));

var deleteTodo = function(todoId) {
  for (var i = 0, t = todoList.length; i < t; i++) {
    if (todoList[i].id === todoId) {
      todoList.splice(i, 1);
      break;
    }
  }
};

var onDeleteTodo = function*(todoId) {
  deleteTodo(parseInt(todoId, 10));
  this.body = getTodoList();
};

app.use(routes.del("/deleteTodo/:todoId", onDeleteTodo));

var saveTodo = function(todo) {
  if (!todo.id) {
    todo.id = todoList.length + 1;
    todoList.push(todo);
  }
  else {
    for (var i = 0, t = todoList.length; i < t; i++) {
      if (todoList[i].id === todo.id) {
        todoList[i] = todo;
        break;
      }
    }
  }
}

var onSaveTodo = function*() {
  saveTodo(yield parse(this));
  this.body = getTodoList();
};

app.use(routes.post("/saveTodo", onSaveTodo));

module.exports = app;
