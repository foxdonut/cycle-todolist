// main.js
import {h} from "@cycle/dom";
import events from "./events";
import model from "./model";
import todoList from "./todoList.jsx";
import todoForm from "./todoForm.jsx";

let main = function(responses) {
  let events$ = events(responses.DOM);
  let model$ = model(responses.HTTP, events$);
  let listView$ = todoList(model$.todos$);
  let formView$ = todoForm(model$.formData$);

  let view$ = listView$.DOM.combineLatest(formView$.DOM, function(listView, formView) {
    return h("div", [formView, listView]);
  });

  return {
    DOM: view$,
    HTTP: model$.request$
  };
};

export default main;
