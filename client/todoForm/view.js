import {h} from "@cycle/dom";
import R from "ramda";

let view = function(model) {
  let view$ = model.todoForm$.map(function(todoForm) {
    var todo = todoForm.todo;
    var validationErrors = todoForm.validationErrors || {};
    var classNames = R.reduce(function(acc, key) {
      acc[key] = "form-group has-error";
      return acc;
    }, {}, R.keys(validationErrors));

    return h("div.row",
      h("div.col-md-4",
        h("form", [
          h("input", {type:"hidden", name:"id", value:todo.id}),
          h("div." + (classNames.priority || "form-group"), [
            h("label", {htmlFor:"priority"}, "Priority:"),
            h("input.form-control", {type:"text", id:"priority", name:"priority", value:todo.priority}),
            h("span.help-block", validationErrors.priority)
          ]),
          h("div." + (classNames.description || "form-group"), [
            h("label", {htmlFor:"description"}, "Description:"),
            h("input.form-control", {type:"text", id:"description", name:"description", value:todo.description}),
            h("span.help-block", validationErrors.description)
          ]),
          h("div", [
            h("button.btn.btn-primary.btn-xs.saveTodo", "Save"),
            h("span", " "),
            h("button.btn.btn-danger.btn-xs.cancelTodo", "Cancel")
          ])
        ])
      )
    );

      /*
            <div>
              <button className="btn btn-primary btn-xs" attributes={{"data-action": "saveTodo"}}>Save</button>
              <span> </span>
              <button className="btn btn-danger btn-xs" attributes={{"data-action": "cancelTodo"}}>Cancel</button>
            </div>
      */
  });
 
  return {
    DOM: view$
  };
};

export default view;
