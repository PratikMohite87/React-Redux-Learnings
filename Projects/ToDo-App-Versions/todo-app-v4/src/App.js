import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItemContainer from "./components/ToDoItemContainer";
import "./App.css";
import { useState } from "react";
import { ToDoItemsListContext } from "./store/ToDoItemsListContext";

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
    <ToDoItemsListContext.Provider
      value={{
        toDoList: toDoItemsList,
        onNewItem: handleAddNewToDo,
        onDeleteItem: handleDeleteToDoItem,
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <ToDoItemContainer></ToDoItemContainer>
      </center>
    </ToDoItemsListContext.Provider>
  );
}

export default App;

// So here we have avoided passing toDoItemsList, handleDeleteToDoItem as prop to ToDoItemContainer -> ToDoItem & handleAddNewToDo to AddToDo.
// Instead we have used Context API in pass these things.

// Whenever there is change in Context API values it repaints the whole UI
