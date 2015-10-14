/** @jsx Cycle.hJSX */
let todoList = function(todos$) {
  let renderTodo = function(todo) {
    return (
      <tr key={todo.id}>
        <td>{todo.priority}</td>
        <td>{todo.description}</td>
        <td><button className="btn btn-danger btn-xs" data-action="delete" onClick={onDelete(todo)}>Delete</button></td>
      </tr>
    );
  };

  let view$ = todos$.map((todos) => {
    <div>
      <div>Todo List:</div>
      <table className="table ng-table">
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
  });

  return {
    DOM: view$
  };
};

export default todoList;
