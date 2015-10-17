import validation from "./validation";

const TODO_SAVE_URL = "/saveTodo";

const blankForm = {
  todo: {
    id: "",
    priority: "",
    description: ""
  },
  validationErrors: {
  }
};

const returnBlankForm = function() {
  return blankForm;
};

let model = function(HTTP, intent) {
  let validation$ = intent.saveTodo$.map(function(todo) {
    return {todo: todo, validationErrors: validation(todo)};
  });

  let valid$ = validation$.filter(function(model) {
    return !model.validationErrors;
  });

  let invalid$ = validation$.filter(function(model) {
    return !!model.validationErrors;
  });

  let request$ = valid$
    .map(function(model) {
      let todo = model.todo;
      if (todo.id) {
        todo.id = parseInt(todo.id, 10);
      }
      return {
        method: "POST",
        url: TODO_SAVE_URL,
        send: JSON.stringify(todo)
      };
    });

  let todoForm$ = intent.saveTodo$
    .map(returnBlankForm)
    .merge(events$.inFormEdit$.map(function(todo) {
      return {todo: todo};
    }))
//  .merge(editTodo$)
    .merge(invalid$)
    .merge(intent.cancelTodo$.map(returnBlankForm))
    .startWith(blankForm);

  return {
    todoForm$: todoForm$,
    HTTP: request$
  };
};

export default model;
