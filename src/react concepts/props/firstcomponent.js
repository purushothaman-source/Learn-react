import React, { useState } from "react";
import { contextExample } from "./context";
import Secondcomponent from "./secondcomponent";

//props is for  sharing data between components

const Firstcomponent = () => {
  const [name1, setName1] = useState("valuename1");
  const [name2, setName2] = useState("valuename2");
  const [name3, setName3] = useState("value3");
  const [name4, setName4] = useState("value4");
  console.log("im rerendering ");

  return (
    <>
      <contextExample.Provider value={{ name1, name2, name3, name4, setName1 }}>
        <div>{name1}</div>
        <Secondcomponent name2={name2} name3={name3} name4={name4} />
      </contextExample.Provider>
    </>
  );
};

export default Firstcomponent;
