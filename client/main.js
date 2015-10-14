// main.js
import Cycle from "@cycle/core";
import {h} from "@cycle/dom";
import todoList from "./todoList.jsx";

let main = (responses) => {
  var todos = [
    {id: 1, priority: 1, description: "Get groceries"},
    {id: 2, priority: 1, description: "Clean out the fridge"},
    {id: 3, priority: 2, description: "Buy coffee filters"},
    {id: 4, priority: 4, description: "Backup all my data"}
  ];

  return todoList(Cycle.Rx.Observable.just(todos));
};

export default main;
