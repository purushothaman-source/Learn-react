import React, { useState } from "react";
import "./learnstate.css";

//state is used to re render the component when we change the state ...
// we can show different style for same element using state ...
// we can show and hide element using state ..

const Learnstate = () => {
  const [value, setValue] = useState(0);
  const [dark, setDark] = useState(false);
  const [dark1, setDark1] = useState(true);

  return (
    <div>
      <button
        className={dark ? "increment" : "defaultstyle"}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        increment
      </button>
      {value}
      <button onClick={() => setValue(value - 1)}> decrement </button>
      {(dark || dark1) && <button onClick={() => setValue(0)}> default</button>}
      <button onClick={() => setDark(!dark)}>change mode</button>
      {dark ? "purushoth" : "eugin"}
      <div className="style ">{dark ? <h1>purushoth </h1> : <p>eugin</p>}</div>
    </div>
  );
};

export default Learnstate;
