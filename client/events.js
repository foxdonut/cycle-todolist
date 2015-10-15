import Cycle from "@cycle/core";
import serialize from "form-serialize";

let events = function(DOM) {
  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(function(evt) {
      return evt.target.dataset.todoId;
    });

  let serializeForm = function(evt) {
    evt.preventDefault();
    return serialize(evt.target.form, {hash: true});
  };

  let inFormEdit$ = DOM.select("input[type='text']").events("change")
    .map(serializeForm);

  let saveTodo$ = DOM.select("button[data-action='saveTodo']").events("click")
    .map(serializeForm)
    .share();

  return {
    deleteTodo$: deleteTodo$,
    inFormEdit$: inFormEdit$,
    saveTodo$: saveTodo$
  };
};

export default events;
