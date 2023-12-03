import ToDoItem from "./ToDoItem";

const ToDoItemContainer = ({ toDoList, onDeleteItem }) => {
  return (
    <>
      <div className="container">
        {toDoList.map((item) => {
          return (
            <ToDoItem
              key={item.toDoName}
              todoName={item.toDoName}
              todoDate={item.toDoDate}
              onDelete={onDeleteItem}
            ></ToDoItem>
          );
        })}
      </div>
    </>
  );
};

export default ToDoItemContainer;
