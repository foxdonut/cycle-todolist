import {h} from "@cycle/dom";
import R from "ramda";

let todoList = function(todos$) {
  let renderTodo = function(todo) {
    return
      h("tr", [
        h("td", todo.priority),
        h("td", todo.description),
        h("td", [
          h("button.btn.btn-primary.btn-xs.editTodo", {"data-todo-id": todo.id}, "Edit"),
          h("button.btn.btn-danger.btn-xs.deleteTodo", {"data-todo-id": todo.id}, "Delete")
        ])
      ]);
  };

  let view$ = todos$.map(function(todos) {
    let th = R.curry(h)("th");

    return
      h("div", [
        h("div", "Todo List:"),
        h("table.table", [
          h("thead", h("tr", ["Priority!", "Description", "Action"].map(th))),
          h("tbody", todos.map(renderTodo))
        ])
      ]);
  });

  return {
    DOM: view$
  };
};

export default todoList;
