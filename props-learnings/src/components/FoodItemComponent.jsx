import style from "./FoodItemComponent.module.css";

function FoodItemComponent(props) {
  return <li className={style["item-text-color"]}>{props.foodItem}</li>;
}

export default FoodItemComponent;
