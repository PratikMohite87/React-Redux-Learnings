import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItemContainer from "./components/ToDoItemContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDoItemsList, setToDoItemsList] = useState([]);

  const handleAddNewToDo = (itemName, itemDueDate) => {
    setToDoItemsList((curVal) => [
      ...curVal,
      { toDoName: itemName, toDoDate: itemDueDate },
    ]);
  };

  const handleDeleteToDoItem = (itemName) => {
    setToDoItemsList((curVal) =>
      curVal.filter((item) => item.toDoName !== itemName)
    );
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handleAddNewToDo}></AddToDo>
      <ToDoItemContainer
        toDoList={toDoItemsList}
        onDeleteItem={handleDeleteToDoItem}
      ></ToDoItemContainer>
    </center>
  );
}

export default App;
