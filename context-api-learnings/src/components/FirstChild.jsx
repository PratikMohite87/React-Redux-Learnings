import SecondChild from "./SecondChild";

const FirstChild = () => {
  return (
    <div style={{ border: "3px solid orange" }}>
      <h3>First Child</h3>
      <p></p>
      <SecondChild></SecondChild>
    </div>
  );
};

export default FirstChild;
