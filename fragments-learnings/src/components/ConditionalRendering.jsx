function ConditionalRendering() {

  let num = 1;

  // Way 1 : Using If else
  // if (num === 2) {
  //   return (
  //     <h3>Its number 2</h3>
  //   );
  // }
  // else {
  //   return (
  //     <h3>Its not number 2</h3>
  //   );
  // }

  // Way 2 : Using Ternary operator
  // return (
  //   num === 2 ? <h3>Its number 2</h3> : <h3>Its not number 2</h3>
  // );

  // Way 3 : Using logical operator
  return (
    num === 2 && <h3>Its number 2</h3>
  );
}

export default ConditionalRendering;