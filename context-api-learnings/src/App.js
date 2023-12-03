import "./App.css";
import FirstChild from "./components/FirstChild";

function App() {
  let name = "Hello";

  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Parent</h1>
      <p>{name}</p>
      <FirstChild name={name}></FirstChild>
    </div>
  );
}

export default App;

// Here I need to pass name value from  App to ThirdChild component.
// One soln is passing it as a prop to FirstChild -> SecondChild -> ThirdChild.
// But there is no use of name value in FirstChild & SecondChild then also we need to pass to make it reach to ThirdChild, this somewhere brings efficiency.
