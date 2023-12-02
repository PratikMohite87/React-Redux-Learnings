import ToDoItem from "./ToDoItem";

const ToDoItemContainer = (props) => {
  return (
    <>
      <div class="container">
        {props.toDoList.map((item) => {
          return (
            <ToDoItem
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
