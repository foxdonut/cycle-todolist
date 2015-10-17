let intent = function(DOM) {
  let getTodoId = function(evt) {
    return parseInt(evt.target.dataset.todoId, 10);
  };

  let deleteTodo$ = DOM.select("button.deleteTodo").events("click")
    .map(getTodoId);

  let editTodo$ = DOM.select("button.editTodo").events("click")
    .map(getTodoId);

  return {
    deleteTodo$: deleteTodo$,
    editTodo$: editTodo$
  };
};

export default intent;
