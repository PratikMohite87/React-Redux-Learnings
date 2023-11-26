import "./App.css";
import ErrorMessageComponent from "./components/ErrorMessageComponent";
import FoodItemsComponent from "./components/FoodItemsComponent";

//Props are basically used to pass data from parent component to child component.
//Data flows one way (downward).
//Props are immutable.

function App() {
  let foodItems = ["Dal", "Roti", "Salad", "Milk", "Green Vegetable"];

  return (
    <>
      <h1>Food Item List</h1>
      <ErrorMessageComponent foodItemsList={foodItems}></ErrorMessageComponent>
      <FoodItemsComponent foodItemsList={foodItems}></FoodItemsComponent>
    </>
  );

  // foodItemsList will be property of props holding value of foodItems.
  // So fooItems will now be accessible inside child components (ErrorMessageComponent,FoodItemsComponent) through props.foodItemsList
}

export default App;
