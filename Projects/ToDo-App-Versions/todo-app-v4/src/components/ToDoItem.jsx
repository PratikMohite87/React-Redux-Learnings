import { useContext } from "react";
import { ToDoItemsListContext } from "../store/ToDoItemsListContext";

function ToDoItem({ todoName, todoDate }) {
  const { onDeleteItem } = useContext(ToDoItemsListContext);

  return (
    <div className="row cust-todo-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger todo-button"
          onClick={() => {
            onDeleteItem(todoName);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
