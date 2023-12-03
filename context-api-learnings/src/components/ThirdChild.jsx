import { useContext } from "react";
import { NameValueContext } from "../store/NameValueContext";

const ThirdChild = () => {
  const { name } = useContext(NameValueContext);
  console.log(name);

  return (
    <div style={{ border: "5px solid red" }}>
      <h4>Third Child</h4>
      <p>{name}</p>
    </div>
  );
};

export default ThirdChild;
