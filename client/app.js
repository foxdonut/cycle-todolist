// app.js
import Cycle from "@cycle/core";
import {makeDOMDriver} from "@cycle/dom";

let main = require("./main");
let drivers = {
  DOM: makeDOMDriver("#app")
};

Cycle.run(main, drivers);
