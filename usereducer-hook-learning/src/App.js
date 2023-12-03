import { useReducer } from "react";
import "./App.css";

// useReducer is same as useState but it gives more control on the state

// Pure Function to passed to useReducer.
// Depending upon the logic written will return the state values.
const CounterReducerFunction = (currentState, action) => {
  let newCount = currentState;

  if (action.type === "Inc") {
    newCount += 1;
  } else if (action.type === "Dec") {
    newCount -= 1;
  }

  return newCount;
};

function App() {
  let [counter, dispatch] = useReducer(CounterReducerFunction, 0); // passing pure function & initial value.

  const onIncrement = () => {
    console.log("In Inc");

    const actionObj = {
      type: "Inc",
    };

    dispatch(actionObj);
  };

  const onDecrement = () => {
    console.log("In Dec");

    const actionObj = {
      type: "Dec",
    };

    dispatch(actionObj);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <br></br>
      <button
        type="button"
        onClick={() => {
          onIncrement();
        }}
      >
        Increment
      </button>
      <br></br>
      <button
        type="Decrement"
        onClick={() => {
          onDecrement();
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
