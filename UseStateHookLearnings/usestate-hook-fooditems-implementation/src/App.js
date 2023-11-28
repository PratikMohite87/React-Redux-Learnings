import { useState } from "react";
import "./App.css";
import FoodItemInput from "./components/fooditem-input-component/FoodItemInput";
import ItemListContainer from "./components/fooditems-list-component/list-container-component/ItemsListContainer";
import Heading from "./components/heading-component/Heading";

function App() {
  // Using useState Hook to maintain the state of foodItemList, so whenever there is addition of new foo item in array it can get repainted on UI
  let [foodItemList, setFoodItemList] = useState([
    "Spinach",
    "Brinjal",
    "Avacado",
  ]);

  const addFoodItem = (itemName) => {
    setFoodItemList([...foodItemList, itemName]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row text-center">
              <Heading></Heading>
            </div>
            <div className="row text-center">
              <FoodItemInput onAddClick={addFoodItem}></FoodItemInput>
            </div>
            <div className="row text-center">
              <ItemListContainer itemList={foodItemList}></ItemListContainer>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default App;
