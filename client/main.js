// main.js
import Cycle from "@cycle/core";
import {h} from "@cycle/dom";

let main = (responses) => {
  return {
    DOM: Cycle.Rx.Observable.just(h("div", "Hello, Cycle"))
  }
};

export default main;