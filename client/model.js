import Cycle from "@cycle/core";

const TODO_LIST_URL = "/todoList";

const blankForm = {
  todo: {
    priority: "",
    description: ""
  }
};

let deleteTodoUrl = function(todoId) {
  return "/deleteTodo/" + todoId;
};

let model = function(HTTP, events$) {
  let request$ = events$.deleteTodo$
    .map(function(todoId) {
      return deleteTodoUrl(todoId);
    })
    .startWith(TODO_LIST_URL);

  let todos$ = HTTP
    //.filter(res$ => res$.request === TODO_LIST_URL)
    .mergeAll()
    .map(res => JSON.parse(res.text));

  let formData$ = events$.saveTodo$
    .map(function(todo) {
      return blankForm;
    })
    .startWith(blankForm);

  return {
    todos$: todos$,
    request$: request$,
    formData$: formData$
  };
};

export default model;
