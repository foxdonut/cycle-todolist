import {h} from "@cycle/dom";
const {div, span} = require("hyperscript-helpers")(h);
import R from "ramda";

let view = function(model) {
  let view$ = model.todos$.map(function(todos) {
    let totalTodos = todos.length;
    let totalPriority = R.pipe(R.pluck("priority"), R.map(parseInt), R.sum);
    let averagePriority = totalPriority(todos) / totalTodos;
    return div(
      span("Total todos: " + totalTodos + " Average priority: " + averagePriority)
    );
  });

  return {
    DOM: view$
  };
};

export default view;
