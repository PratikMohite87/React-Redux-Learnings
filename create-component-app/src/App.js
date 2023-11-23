import './App.css';
import FirstComponent from './first-component/FirstComponent';
import OnePointTwoComponent from './first-component/OnePointTwoComponent';
import DynamicComponent from './DynamicComponents/DynamicComponent';

// This component - App

// Generally the function name written in JS is camelcase but we for component we write it in Caps.
function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <FirstComponent></FirstComponent>
      {/* <FirstComponent /> This is short hand of above line  */}
      <OnePointTwoComponent />
      {/* Here we are proving reusability of components */}
      <DynamicComponent></DynamicComponent>
      <DynamicComponent></DynamicComponent>
      <DynamicComponent></DynamicComponent>
      <DynamicComponent></DynamicComponent>
    </div>
    
  );
}

export default App;
