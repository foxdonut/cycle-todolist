import {h} from "@cycle/dom";
import todoMain from "./todoMain";
import summaryView from "./todoSummary/view";

let main = function(sources) {
  let todoMain$ = todoMain(sources);
  let summaryView$ = summaryView(todoMain$);
  let view$ = todoMain$.DOM.combineLatest(summaryView$.DOM, function(mainView, summaryView) {
    return h("div", [mainView, summaryView]);
  });

  return {
    DOM: view$,
    HTTP: todoMain$.HTTP,
    preventDefault: todoMain$.preventDefault
  };
};

export default main;
