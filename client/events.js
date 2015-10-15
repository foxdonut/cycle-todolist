import Cycle from "@cycle/core";
import serialize from "form-serialize";

let events = function(DOM) {
  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(function(evt) {
      return evt.target.dataset.todoId;
    });

  let saveTodo$ = DOM.select("button[data-action='saveTodo']").events("click")
    .map(function(evt) {
      evt.preventDefault();
      return serialize(evt.target.form, {hash: true});
    });

  return {
    deleteTodo$: deleteTodo$,
    saveTodo$: saveTodo$
  };
};

export default events;
