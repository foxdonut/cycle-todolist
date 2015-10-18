import {h} from "@cycle/dom";
import todoListMain from "./todoList/main";
import todoFormMain from "./todoForm/main";

let todoMain = function(sources) {
  let todoList = todoListMain(sources);
  let todoForm = todoFormMain(sources, todoList.editTodo$);

  let view$ = todoList.DOM.combineLatest(todoForm.DOM, function(listView, formView) {
    return h("div", [formView, listView]);
  });

  let request$ = todoList.HTTP.merge(todoForm.HTTP);

  return {
    DOM: view$,
    HTTP: request$,
    todos$: todoList.todos$
  };
};

export default todoMain;