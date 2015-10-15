import Cycle from "@cycle/core";

let events = function(DOM) {
  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(function(evt) {
      return parseInt(evt.target.dataset.todoId, 10);
    });

  return {
    deleteTodo$: deleteTodo$,
  };
};

export default events;
