/** @jsx CycleDOM.hJSX */
import CycleDOM from "@cycle/dom";

let todoList = function(todos$) {
  let renderTodo = function(todo) {
    return (
      <tr>
        <td>{todo.priority}</td>
        <td>{todo.description}</td>
        <td><button className="btn btn-danger btn-xs deleteTodo" attributes={{"data-todo-id": todo.id}}>Delete</button></td>
      </tr>
    );
  };

  let view$ = todos$.map(function(todos) {
    return (
      <div>
        <div>Todo List:</div>
        <table className="table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(renderTodo)}
          </tbody>
        </table>
      </div>
    );
  })

  return {
    DOM: view$
  };
};

export default todoList;
