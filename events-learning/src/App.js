import "./App.css";
import FoodItemInput from "./components/fooditem-input-component/FoodItemInput";
import ItemListContainer from "./components/fooditems-list-component/list-container-component/ItemsListContainer";
import Heading from "./components/heading-component/Heading";

function App() {
  let foodItemList = ["Spinach", "Brinjal", "Avacado"];

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
              <FoodItemInput></FoodItemInput>
            </div>
            <div className="row text-center">
              <ItemListContainer itemList={foodItemList}></ItemListContainer>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>

    // <ul class="list-group">
    //   <li class="list-group-item">An item</li>
    //   <li class="list-group-item">A second item</li>
    //   <li class="list-group-item">A third item</li>
    //   <li class="list-group-item">A fourth item</li>
    //   <li class="list-group-item">And a fifth one</li>
    // </ul>
  );
}

export default App;
