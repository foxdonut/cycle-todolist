import {h} from "@cycle/dom";
const {button, div, span, table, tbody, td, thead, th, tr} = require("hyperscript-helpers")(h);

let view = function(model) {
  let renderTodo = function(todo) {
    return tr([
      td(todo.priority),
      td(todo.description),
      td([
        button("btn.btn-primary.btn-xs.editTodo", {"data-todo-id": todo.id}, "Edit"),
        span(" "),
        button(".btn.btn-danger.btn-xs.deleteTodo", {"data-todo-id": todo.id}, "Delete")
      ])
    ]);
  };

  let view$ = model.todos$.map(function(todos) {
    return div([
      div("Todo List:"),
      table(".table", [
        thead(tr(["Priority", "Description", "Action"].map(th))),
        tbody(todos.map(renderTodo))
      ])
    ]);
  });

  return {
    DOM: view$
  };
};

export default view;
