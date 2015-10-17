// main.js
import {h} from "@cycle/dom";
import todoListMain from "./todoList/main";
import todoFormMain from "./todoForm/main";

let main = function(sources) {
  let todoList = todoListMain(sources);
  let todoForm = todoFormMain(sources);

  let view$ = listView$.DOM.combineLatest(formView$.DOM, function(listView, formView) {
    return h("div", [formView, listView]);
  });

  return {
    DOM: view$,
    HTTP: model$.request$
  };
};

export default main;
