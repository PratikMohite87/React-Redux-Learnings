import ThirdChild from "./ThirdChild";

const SecondChild = ({ name }) => {
  return (
    <div style={{ border: "4px solid green" }}>
      <h3>Second Child</h3>
      <p></p>
      <ThirdChild name={name}></ThirdChild>
    </div>
  );
};

export default SecondChild;
