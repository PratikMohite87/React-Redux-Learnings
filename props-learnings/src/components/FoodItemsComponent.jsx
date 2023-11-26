import FoodItemComponent from "./FoodItemComponent";

function FoodItemsComponent(props) {
  return (
    <ul className="list-group">
      {props.foodItemsList.map((items) => (
        <FoodItemComponent key={items} foodItem={items}></FoodItemComponent>
      ))}
    </ul>
  );
}

export default FoodItemsComponent;
