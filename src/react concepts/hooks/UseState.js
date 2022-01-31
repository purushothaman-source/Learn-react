import React, { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(0);
  const [bool, setBool] = useState(true);
  const [str, setStr] = useState("");
  const [arr, setArr] = useState([]);
  const [obj, setObj] = useState({
    name: "purushoth",
    place: "cuddalore ",
    gender: "male"
  });

  return (
    <div>
      {`Number :  ${number}`}
      <button onClick={() => setNumber(prev => prev + 1)}>Change Number</button>
      {`Boolean : ${bool.toString()}`}
      <button onClick={() => setNumber(prev => prev + 1)}>Change Boolen</button>
      {`String :  ${str}`}
      <button onClick={() => setArr([...arr, arr.length])}>Change Arr</button>
      <span>Array values</span>
      <span>Using map</span>
      {arr.map(val => (
        <span>{`${val} -`}</span>
      ))}
      <span>converted to array to string </span>
      <span>{arr.join("-")}</span>
      <button
        onClick={() =>
          setObj(prev => {
            return {
              ...prev,
              name: "nirmal",
              newItem: "we can add new field as well"
            };
          })
        }
      >
        change object
      </button>
      {`Object name field using dot ${obj.name} using array branket ${obj["name"]}`}
    </div>
  );
};

export default UseState;
