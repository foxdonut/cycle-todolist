import Cycle from "@cycle/core";
import R from "ramda";

const TODO_LIST_URL = "/todoList";
const TODO_SAVE_URL = "/saveTodo";

const blankForm = {
  todo: {
    priority: "",
    description: ""
  }
};

const returnBlankForm = function() {
  return blankForm;
};

let deleteTodoUrl = function(todoId) {
  return "/deleteTodo/" + todoId;
};

let model = function(HTTP, events$) {
  let saveTodoRequest$ = events$.saveTodo$
    .map(function(todo) {
      if (todo.id) {
        todo.id = parseInt(todo.id, 10);
      }
      return {
        method: "POST",
        url: TODO_SAVE_URL,
        send: JSON.stringify(todo)
      };
    });

  let request$ = events$.deleteTodo$
    .map(function(todoId) {
      return {
        method: "DEL",
        url: deleteTodoUrl(todoId)
      };
    })
    .merge(saveTodoRequest$)
    .startWith(TODO_LIST_URL);

  let todos$ = HTTP
    //.filter(res$ => res$.request === TODO_LIST_URL)
    .mergeAll()
    .map(res => JSON.parse(res.text));

  let editTodo$ = events$.editTodo$.combineLatest(todos$, function(editTodoId, todos) {
    return {todo: R.find(R.propEq("id", editTodoId))(todos)};
  });

  let formData$ = events$.saveTodo$
    .map(returnBlankForm)
    .merge(events$.inFormEdit$.map(function(todo) {
      return {todo: todo};
    }))
    .merge(editTodo$)
    .startWith(blankForm);

  return {
    todos$: todos$,
    request$: request$,
    formData$: formData$
  };
};

export default model;
