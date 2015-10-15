// main.js
import R from "ramda";
import events from "./events";
import model from "./model";
import todoList from "./todoList.jsx";

let main = R.pipe(events, model, todoList);

export default main;
