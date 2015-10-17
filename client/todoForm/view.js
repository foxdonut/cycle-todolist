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
          h("input.hidden", {name:"id", value:todo.id}),
          h("div")
        ])
      )
    );

      /*
      <div className="row">
        <div className="col-md-4">
          <form>
            <input type="hidden" name="id" value={todo.id}/>
            <div className={classNames.priority || "form-group"}>
              <label htmlFor="priority">Priority:</label>
              <input type="text" id="priority" name="priority" value={todo.priority} className="form-control"/>
              <span className="help-block">{validationErrors.priority}</span>
            </div>
            <div className={classNames.description || "form-group"}>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" value={todo.description} className="form-control"/>
              <span className="help-block">{validationErrors.description}</span>
            </div>
            <div>
              <button className="btn btn-primary btn-xs" attributes={{"data-action": "saveTodo"}}>Save</button>
              <span> </span>
              <button className="btn btn-danger btn-xs" attributes={{"data-action": "cancelTodo"}}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      */
  });
 
  return {
    DOM: view$
  };
};

export default view;
