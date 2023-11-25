function FragmentsLearnings() {
  // return (
  //   <h1>Fragments</h1>
  //   <ul class="list-group">
  //     <li class="list-group-item">An item</li>
  //     <li class="list-group-item">A second item</li>
  //     <li class="list-group-item">A third item</li>
  //     <li class="list-group-item">A fourth item</li>
  //     <li class="list-group-item">And a fifth one</li>
  //   </ul>
  // );

  // Above return will mgive error becox jsx expression must have one parent element, here our h1 and ul are not under any parent element.

  // return (
  //   <div>
  //     <h1>Fragments</h1>
  //     <ul class="list-group">
  //       <li class="list-group-item">An item</li>
  //       <li class="list-group-item">A second item</li>
  //       <li class="list-group-item">A third item</li>
  //       <li class="list-group-item">A fourth item</li>
  //       <li class="list-group-item">And a fifth one</li>
  //     </ul>
  //   </div>
  // );

  // Above can be the solution by wrapping elements under div or any parent element, but this will create unnecessary extra element (in this case div) in the DOM.

  // So to avoid this and to solve the error we have Fragments in react.
  // Fragments is wrapper provided by React which does reflect in DOM and solves error problem of having one parent element.

  // We can use --> <React.Fragment></React.Fragment> for wrapping , or we have short hand <></>.

  return (
    <>
      <h1>Fragments</h1>
      <ul className="list-group">
        <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green Vegetable</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li>
      </ul>
    </>
  );
}

export default FragmentsLearnings;