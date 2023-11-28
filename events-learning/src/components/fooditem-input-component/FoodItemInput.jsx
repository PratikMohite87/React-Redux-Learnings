const FoodItemInput = (props) => {
  let newFoodItem;

  const inputOnChangeHandler = (value) => {
    newFoodItem = value;
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Food Item"
        aria-label="Food Item"
        aria-describedby="button-addon2"
        onChange={(event) => inputOnChangeHandler(event.target.value)}
      />
      {/* Here we are attaching the function passed by the parent component(i.e onAddClick), so that we will pass value which is clicked in child component into parent component */}
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => props.onAddClick(newFoodItem)}
      >
        Add
      </button>
    </div>
  );
};

export default FoodItemInput;
