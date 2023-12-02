function AddToDo() {
  return (
    <div class="container">
      <div class="row cust-todo-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here"></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;