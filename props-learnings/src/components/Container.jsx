// Whatever JSX, string, number,... passed between <Container></Container> tags in Parent Component where these tags are used (in this case App.js), that passed content between tags can accessed in child component using props.children

const Container = (props) => {
  return (
    <div
      style={{ backgroundColor: "#FFFF00", border: "5px solid", margin: "3px" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
