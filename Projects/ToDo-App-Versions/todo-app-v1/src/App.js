import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <div className="items-container">
        <ToDoItem></ToDoItem>
      </div>
    </center>
  );
}

export default App;
