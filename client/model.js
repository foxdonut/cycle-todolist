import Cycle from "@cycle/core";

const TODO_LIST_URL = "/todoList";

let model = function(HTTP) {
  //let todoListAfterDelete$ = events.deleteTodo$.map(deleteTodo);

  let request$ = Cycle.Rx.Observable.just(TODO_LIST_URL);

  let todos$ = HTTP
    .filter(res$ => res$.request === TODO_LIST_URL)
    .mergeAll()
    .map(res => JSON.parse(res.text));

  return {
    todos$: todos$,
    request$: request$
  };
};

export default model;
