import ThirdChild from "./ThirdChild";

const SecondChild = () => {
  return (
    <div style={{ border: "4px solid green" }}>
      <h3>Second Child</h3>
      <p></p>
      <ThirdChild></ThirdChild>
    </div>
  );
};

export default SecondChild;
