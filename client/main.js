// main.js
import events from "./events";
import model from "./model";
import todoList from "./todoList.jsx";

let main = function(responses) {
  let events$ = events(responses.DOM);
  let model$ = model(responses.HTTP, events$);
  let view$ = todoList(model$.todos$);

  return {
    DOM: view$.DOM,
    HTTP: model$.request$
  };
};

export default main;
