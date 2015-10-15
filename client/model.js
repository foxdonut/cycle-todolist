import Cycle from "@cycle/core";

let model = function(responses) {
  //let todoListAfterDelete$ = events.deleteTodo$.map(deleteTodo);

  let model$ = Cycle.Rx.Observable
    .just("/todoList")
    .merge(todoListAfterDelete$);

  return {
    model$: model$,
    HTTP: responses.HTTP
  };
};

export default model;
