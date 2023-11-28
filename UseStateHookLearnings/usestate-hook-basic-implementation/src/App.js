import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // let text = "Waiting for value";

  // const onChangeHandler = (value) => {
  //   text = value;
  // };

  // return (
  //   <div className="App">
  //     <input
  //       type="text"
  //       onChange={(event) => onChangeHandler(event.target.value)}
  //     ></input>
  //     <br></br>
  //     <h1>{text}</h1>
  //   </div>
  // );

  // Above code block will not be able to repaint the updated value of text as we type in input box, so it will show its initial value only.
  // Solution to repaint the updated value is using useState (state management).

  // useState returns a statefull value and function to update it (in for of array).
  let useStateObj = useState("Waiting for value");

  let text = useStateObj[0]; // Accessing statefull value.
  let setTextFun = useStateObj[1]; // Accessing function to update it. (i.e it will update the value of text variable, which is stateful)

  // So as variable text is stateful whenever its value is change same value will be repainted on UI automatically.

  const onChangeHandler = (value) => {
    setTextFun(value);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(event) => onChangeHandler(event.target.value)}
      ></input>
      <br></br>
      <h1>{text}</h1>
    </div>
  );
}

export default App;
