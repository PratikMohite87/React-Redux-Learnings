function DynamicComponent() {

  let myName = "Pratik";
  let ranNumber = Math.round(Math.random() * 100);

  let fullName = () => {
    return "Pratik Mohite";
  }

  return (
    <h3 style={{'background-color' : '#776691'}}>Hello this from dynamic component, my name is {myName} and full name is {fullName()} : {ranNumber}</h3>
  );
}

export default DynamicComponent;