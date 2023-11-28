const ListItem = (props) => {
  const onClickHandler = (foodItem) => {
    console.log(foodItem + " Selected");
  };

  return (
    <div className="row">
      <div className="col-8">
        <li className="list-group-item">{props.foodItem}</li>
      </div>
      <div className="col-4">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onClickHandler(props.foodItem)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default ListItem;
