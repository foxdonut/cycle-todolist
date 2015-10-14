import Cycle from "@cycle/core";

var todos = [
  {id: 1, priority: 1, description: "Get groceries"},
  {id: 2, priority: 1, description: "Clean out the fridge"},
  {id: 3, priority: 2, description: "Buy coffee filters"},
  {id: 4, priority: 4, description: "Backup all my data"}
];

let deleteTodo = function(todoId) {
  for (var i = 0, t = todos.length; i < t; i++) {
    if (todos[i].id === todoId) {
      todos.splice(i, 1);
      break;
    }
  }
  return todos;
};

let model = function(events) {
  let todoListAfterDelete$ = events.deleteTodo$.map(deleteTodo);

  let model$ = Cycle.Rx.Observable
    .return(todos)
    .merge(todoListAfterDelete$);

  return model$;
};

export default model;
