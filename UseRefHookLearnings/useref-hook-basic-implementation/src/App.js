import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  // Use state is used for re rendereing
  let [count, setCount] = useState(0);

  // Its not because it does not trigger repaint event, it just maintain state.
  let countRef = useRef(0);

  const onClickHandler = () => {
    setCount(count + 1);
    countRef.current++;

    console.log(count); // Count state in count variable updates when its re render so o/p: 0
    console.log(countRef.current); // countRef state is updated at that moment only so o/p: 1

    // on next click count will be 1 & countRef will be 2
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => onClickHandler()}>Inc</button>
    </div>
  );
}

export default App;
