import ToDoItem from "./ToDoItem";
import { useContext } from "react";
import { ToDoItemsListContext } from "../store/ToDoItemsListContext";

const ToDoItemContainer = () => {
  const { toDoList } = useContext(ToDoItemsListContext);
  return (
    <>
      <div className="container">
        {toDoList.map((item) => {
          return (
            <ToDoItem
              key={item.toDoName}
              todoName={item.toDoName}
              todoDate={item.toDoDate}
            ></ToDoItem>
          );
        })}
      </div>
    </>
  );
};

export default ToDoItemContainer;
