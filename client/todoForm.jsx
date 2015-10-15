/** @jsx CycleDOM.hJSX */
import CycleDOM from "@cycle/dom";

let todoForm = function(formData$) {
  let view$ = formData$.map(function(model) {
    return (
      <div className="row">
        <div className="col-md-4">
          <form>
            <div className="form-group">
              <label htmlFor="priority">Priority:</label>
              <input type="text" id="priority" name="priority" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" className="form-control"/>
            </div>
            <div><button className="btn btn-primary btn-xs" data-action="save">Save</button></div>
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
