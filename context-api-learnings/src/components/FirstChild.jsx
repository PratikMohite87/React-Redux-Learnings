import SecondChild from "./SecondChild";

const FirstChild = ({ name }) => {
  return (
    <div style={{ border: "3px solid orange" }}>
      <h3>First Child</h3>
      <p></p>
      <SecondChild name={name}></SecondChild>
    </div>
  );
};

export default FirstChild;
