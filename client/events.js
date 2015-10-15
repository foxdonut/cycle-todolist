import Cycle from "@cycle/core";

let events = function(responses) {
  let deleteTodo$ = responses.DOM.select("button.deleteTodo").events("click")
    .map(function(evt) {
      return parseInt(evt.target.dataset.todoId, 10);
    });

  let request$ = Cycle.Rx.Observable.just("/todoList");

  return {
    deleteTodo$: deleteTodo$,
    HTTP: request$
  };
};

export default events;
