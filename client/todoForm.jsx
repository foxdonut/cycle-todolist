/** @jsx CycleDOM.hJSX */
import CycleDOM from "@cycle/dom";

let todoForm = function(formData$) {
  let view$ = formData$.map(function(model) {
    var todo = model.todo;

    return (
      <div className="row">
        <div className="col-md-4">
          <form>
            <input type="hidden" name="id" value={todo.id}/>
            <div className="form-group">
              <label htmlFor="priority">Priority:</label>
              <input type="text" id="priority" name="priority" value={todo.priority} className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" value={todo.description} className="form-control"/>
            </div>
            <div><button className="btn btn-primary btn-xs" attributes={{"data-action": "saveTodo"}}>Save</button></div>
          </form>
        </div>
      </div>
    );
  });
 
  return {
    DOM: view$
  };
};

export default todoForm;
