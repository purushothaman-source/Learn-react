import React, { useEffect, useState } from "react";

let bool = false;

const UseEffect = () => {
  const [change, setChange] = useState(true);
  const [change1, setChange1] = useState(true);

  useEffect(() => {
    console.log("I will run only when this compount mount ");
  }, []);
  useEffect(() => {
    console.log("I will run everytime  whenever this component render ");
  });
  useEffect(() => {
    console.log("i will run firsttime and then when change1 state change");
  }, [change1]);
  useEffect(() => {
    if (bool) {
      console.log("im running ");
    } else {
      bool = true;
    }
  });
  return (
    <div>
      <button onClick={() => setChange(!change)}> change</button>
      useEffect
      <button onClick={() => setChange1(!change1)}> change1</button>
    </div>
  );
};

export default UseEffect;
