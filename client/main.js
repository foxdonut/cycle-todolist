// main.js
import events from "./events";
import model from "./model";
import todoList from "./todoList.jsx";

let main = (responses) => {
  return todoList(model(events(responses.DOM)));
};

export default main;
