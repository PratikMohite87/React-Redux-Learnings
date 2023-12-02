function ToDoItem(props) {
  return (
    <div class="row cust-todo-row">
      <div class="col-6">{props.todoName}</div>
      <div class="col-4">{props.todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger todo-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
