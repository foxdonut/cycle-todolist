import intent from "./intent";
import model from "./model";
import view from "./view";

let main = function(sources) {
  let intent$ = intent(sources.DOM);
  let model$ = model(sources.HTTP, intent$);
  let view$ = view(model$);

  return {
    DOM: view$.DOM,
    HTTP: model$.HTTP
  };
};

export default main;
