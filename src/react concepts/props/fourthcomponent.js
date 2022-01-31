import React, { useContext } from "react";
import { contextExample } from "./context";
const Fourthcomponent = props => {
  const contextValue = useContext(contextExample);
  console.log(contextValue);
  return (
    <>
      <button onClick={() => contextValue.setName1("changing ")}>
        change first comp state{" "}
      </button>
      <div> {contextValue.name4} </div>
    </>
  );
};

export default Fourthcomponent;
