function MapMethodLearnings() {

  let foodItems = ['Dal','Roti','Salad','Milk','Green Vegetable'];

  return (
    <>
      <h1>Map Method use</h1>
      <br/>
      <p>Can be used for iterating the data with html elements</p>
      <br/>
      <p>Here we are iterating the Food Items with li html element</p>
      <ul className="list-group">
        {foodItems.map(items => <li key={items} className="list-group-item">{items}</li>)}
      </ul>
    </>
  );

  //Each HTML elements should have a unique key, if it does not have then we can get to see error on browser console.
  //Key is needed by the React to identify the changed HTML element and repaint only that object (i.e that particular HTML element on which change has occured) instead of repainting the whole page.

  //So if key to each UI elements are mentioned then it considered as time efficient practice.

  //Generally when we mention  HTML element all elements will have unique key by default, but when we create multiple HTML elements using MAP method all element will have same key, but key should be unique for each element, therefore we need to explicitly mention key as above.
}

export default MapMethodLearnings;