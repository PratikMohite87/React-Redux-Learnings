import "./App.css";
import FirstChild from "./components/FirstChild";
import { NameValueContext } from "./store/NameValueContext";

function App() {
  let name = "Hello";

  return (
    <div style={{ border: "2px solid black" }}>
      {/* Setting the value of context, and context will accessible to all components included inside tags */}
      {/* Value can be a const value or javascript object, which you can see in Context API implementation in ToDo App */}
      <NameValueContext.Provider value={{ name }}>
        <h1>Parent</h1>
        <p>{name}</p>
        <FirstChild></FirstChild>
      </NameValueContext.Provider>
    </div>
  );
}

export default App;

// Here I need to pass name value from  App to ThirdChild component.
// One soln is passing it as a prop to FirstChild -> SecondChild -> ThirdChild.
// But there is no use of name value in FirstChild & SecondChild then also we need to pass to make it reach to ThirdChild, this somewhere brings efficiency.

// So solution for this is using Context API.
