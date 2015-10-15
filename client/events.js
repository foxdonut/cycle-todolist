import Cycle from "@cycle/core";

let events = function(DOM) {
  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(function(evt) {
      return evt.target.dataset.todoId;
    });

  return {
    deleteTodo$: deleteTodo$,
  };
};

export default events;
