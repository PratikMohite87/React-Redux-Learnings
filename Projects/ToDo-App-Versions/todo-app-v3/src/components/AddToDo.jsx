import { useRef } from "react";

// function AddToDo({ onNewItem }) {
//   const [toDoName, setTodoName] = useState();
//   const [toDoDate, setTodoDate] = useState();

//   const handleToDoNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleToDoDateChange = (event) => {
//     setTodoDate(event.target.value);
//   };

//   const handleAddButtonClicked = () => {
//     onNewItem(toDoName, toDoDate);

//     setTodoName("");
//     setTodoDate("");
//   };

//   return (
//     <div className="container">
//       <div className="row cust-todo-row">
//         <div className="col-6">
//           <input
//             type="text"
//             placeholder="Enter Todo Here"
//             onChange={handleToDoNameChange}
//             value={toDoName}
//           ></input>
//         </div>
//         <div className="col-4">
//           <input
//             type="date"
//             onChange={handleToDoDateChange}
//             value={toDoDate}
//           ></input>
//         </div>
//         <div className="col-2">
//           <button
//             type="button"
//             className="btn btn-success todo-button"
//             onClick={handleAddButtonClicked}
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// Now in the above code we have created state (toDoName, toDoDate) of input field.
// So whenever onChange event will get triggered our attached functions (handleToDoNameChange,handleToDoDateChange) will get called and it will set the cuurent input values to toDoName, toDoDate.
// We know that whenever we try tu change our useState variable value using set function it trigger the repaint event and the page/ component gets repaint.
// So, in above code whenever onChange event gets triggered repaint event will also get trigger that many time.
// This case of frequently triggerring of repain t event is not very efficient, but whenever we try to set the value of useState variable this is bound to happen.

// Solution for this is useRef as it does not get involved in repainting it only used to maintain state similar to useState.

// So from above code where we are using useState to maintain state of input fields value is not required as we are using useRef to maintain state of input fields. (look on to bellow commented not reqired code)

function AddToDo({ onNewItem }) {
  // const [toDoName, setTodoName] = useState();
  // const [toDoDate, setTodoDate] = useState();

  const toDoName = useRef();
  const toDoDate = useRef();

  // const handleToDoNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleToDoDateChange = (event) => {
  //   setTodoDate(event.target.value);
  // };

  const handleAddButtonClicked = () => {
    const task = toDoName.current.value;
    const taskDate = toDoDate.current.value;

    toDoName.current.value = "";
    toDoDate.current.value = "";

    onNewItem(task, taskDate);

    // setTodoName("");
    // setTodoDate("");
  };

  return (
    <div className="container">
      <div className="row cust-todo-row">
        <div className="col-6">
          <input
            type="text"
            ref={toDoName}
            placeholder="Enter Todo Here"
            // onChange={handleToDoNameChange}
            // value={toDoName}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={toDoDate}
            // onChange={handleToDoDateChange}
            // value={toDoDate}
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
