// app.js
import Cycle from "@cycle/core";
import {makeDOMDriver} from "@cycle/dom";
import {makeHTTPDriver} from "@cycle/http";

let main = require("./main");
let drivers = {
  DOM: makeDOMDriver("#app"),
  HTTP: makeHTTPDriver()
};

Cycle.run(main, drivers);
