import { useRef } from "react";

function AddToDo({ onNewItem }) {
  const toDoName = useRef();
  const toDoDate = useRef();

  const handleAddButtonClicked = () => {
    const task = toDoName.current.value;
    const taskDate = toDoDate.current.value;

    toDoName.current.value = "";
    toDoDate.current.value = "";

    onNewItem(task, taskDate);
  };

  return (
    <div className="container">
      <div className="row cust-todo-row">
        <div className="col-6">
          <input
            type="text"
            ref={toDoName}
            placeholder="Enter Todo Here"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" ref={toDoDate}></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success todo-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
