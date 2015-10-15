import Cycle from "@cycle/core";

const TODO_LIST_URL = "/todoList";

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

  return {
    todos$: todos$,
    request$: request$
  };
};

export default model;
