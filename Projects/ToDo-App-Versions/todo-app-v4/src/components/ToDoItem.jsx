function ToDoItem({ todoName, todoDate, onDelete }) {
  return (
    <div className="row cust-todo-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger todo-button"
          onClick={() => {
            onDelete(todoName);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
