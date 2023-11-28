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
