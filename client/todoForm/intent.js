import serialize from "form-serialize";

let intent = function(DOM) {
  let serializeForm = function(evt) {
    evt.preventDefault();
    return serialize(evt.target.form, {hash: true});
  };

  let inFormEdit$ = DOM.select("input[type='text']").events("change")
    .map(serializeForm);

  let saveTodo$ = DOM.select("button.saveTodo").events("click")
    .map(serializeForm)
    .share();

  let cancelTodo$ = DOM.select("button.cancelTodo").events("click")
    .map(function(evt) {
      evt.preventDefault();
    });

  return {
    inFormEdit$: inFormEdit$,
    saveTodo$: saveTodo$,
    cancelTodo$: cancelTodo$
  };
};

export default intent;
