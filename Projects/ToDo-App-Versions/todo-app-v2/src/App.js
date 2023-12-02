import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItemContainer from "./components/ToDoItemContainer";
import "./App.css";

function App() {
  const toDoItemsList = [
    {
      toDoName: "Buy Milk",
      toDoDate: "4/11/2023",
    },
    {
      toDoName: "Buy Vegetable",
      toDoDate: "4/11/2023",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <ToDoItemContainer toDoList={toDoItemsList}></ToDoItemContainer>
    </center>
  );
}

export default App;
