import serialize from "form-serialize";

let intent = function(DOM) {
  let serializeForm = function(evt) {
    return serialize(evt.target.form, {hash: true});
  };

  let inFormEditEvent$ = DOM.select("input[type='text']").events("change");
  let inFormEdit$ = inFormEditEvent$.map(serializeForm);

  let saveTodoEvent$ = DOM.select("button.saveTodo").events("click");
  let saveTodo$ = saveTodoEvent$.map(serializeForm).share();

  let cancelTodo$ = DOM.select("button.cancelTodo").events("click");

  let preventDefault$ = inFormEditEvent$
    .merge(saveTodoEvent$)
    .merge(cancelTodo$)

  return {
    inFormEdit$: inFormEdit$,
    saveTodo$: saveTodo$,
    cancelTodo$: cancelTodo$,
    preventDefault: preventDefault$
  };
};

export default intent;
