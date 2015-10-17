import Cycle from "@cycle/core";
import serialize from "form-serialize";

let events = function(DOM) {
  let getTodoId = function(evt) {
    return parseInt(evt.target.dataset.todoId, 10);
  };

  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(getTodoId);

  let editTodo$ = DOM.select("button.editTodo").events("click")
    .map(getTodoId);

  let serializeForm = function(evt) {
    evt.preventDefault();
    return serialize(evt.target.form, {hash: true});
  };

  let inFormEdit$ = DOM.select("input[type='text']").events("change")
    .map(serializeForm);

  let saveTodo$ = DOM.select("button[data-action='saveTodo']").events("click")
    .map(serializeForm)
    .share();

  let cancelTodo$ = DOM.select("button[data-action='cancelTodo']").events("click")
    .map(function(evt) {
      evt.preventDefault();
    });

  return {
    deleteTodo$: deleteTodo$,
    inFormEdit$: inFormEdit$,
    editTodo$: editTodo$,
    saveTodo$: saveTodo$,
    cancelTodo$: cancelTodo$
  };
};

export default events;
