function ErrorMessageComponent(props) {
  return props.foodItemsList.length === 0 ? <h2>Need to stay hungry</h2> : null;
}

export default ErrorMessageComponent;
