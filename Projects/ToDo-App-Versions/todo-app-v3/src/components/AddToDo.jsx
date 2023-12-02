import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [toDoName, setTodoName] = useState();
  const [toDoDate, setTodoDate] = useState();

  const handleToDoNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleToDoDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(toDoName, toDoDate);

    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row cust-todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleToDoNameChange}
            value={toDoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            onChange={handleToDoDateChange}
            value={toDoDate}
          ></input>
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
