import ListItem from "../list-item-component/ListItem";

const ItemListContainer = (props) => {
  return (
    <ul className="list-group">
      {props.itemList.map((items) => (
        <ListItem key={items} foodItem={items}></ListItem>
      ))}
    </ul>
  );
};

export default ItemListContainer;
