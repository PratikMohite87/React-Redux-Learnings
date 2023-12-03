import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItemContainer from "./components/ToDoItemContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const initialToDoItemsList = [
    {
      toDoName: "Buy Milk",
      toDoDate: "4/11/2023",
    },
    {
      toDoName: "Buy Vegetable",
      toDoDate: "4/11/2023",
    },
  ];

  const [toDoItemsList, setToDoItemsList] = useState(initialToDoItemsList);

  const handleAddNewToDo = (itemName, itemDueDate) => {
    // Now here there are the chances that toDoItemsList value may be out dated becoz of async operation, which can lead to unwanted behaviour
    // So let set function only give its states current value.

    // setToDoItemsList([
    //   ...toDoItemsList,
    //   { toDoName: itemName, toDoDate: itemDueDate },
    // ]);

    setToDoItemsList((curVal) => [
      ...curVal,
      { toDoName: itemName, toDoDate: itemDueDate },
    ]);
  };

  const handleDeleteToDoItem = (itemName) => {
    // setToDoItemsList(
    //   toDoItemsList.filter((item) => item.toDoName !== itemName)
    // );

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
