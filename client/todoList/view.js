import {h} from "@cycle/dom";
const {button, div, span, table, tbody, td, thead, tr} = require("hyperscript-helpers")(h);
import R from "ramda";

let view = function(model) {
  let renderTodo = function(todo) {
    return tr([
      td(String(todo.priority)),
      td(todo.description),
      td([
        button(".btn.btn-primary.btn-xs.editTodo", {attributes: {"data-todo-id": todo.id}}, "Edit"),
        span(" "),
        button(".btn.btn-danger.btn-xs.deleteTodo", {attributes: {"data-todo-id": todo.id}}, "Delete")
      ])
    ]);
  };

  let view$ = model.todos$.map(function(todos) {
    let th = R.binary(R.curry(h))("th");
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
