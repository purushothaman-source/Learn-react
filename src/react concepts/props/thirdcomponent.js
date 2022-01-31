import React, { useContext } from "react";
import Secondcomponent from "./secondcomponent";
import Fourthcomponent from "./fourthcomponent";
import { contextExample } from "./context";

//array destructuring

const Thirdcomponent = () => {
  const contextValue = useContext(contextExample);
  console.log("from component3", contextValue);

  return (
    <>
      <Fourthcomponent />
    </>
  );
};

export default Thirdcomponent;
