import React, { useReducer } from "react";

function reducerfn(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Usereducer = () => {
  const initialState = { count: 0 };

  const [value, setValue1] = useReducer(reducerfn, initialState);

  return (
    <>
      Count: {value.count}
      <button onMouseOver={() => setValue1({ type: "decrement" })}>-</button>
      <button onMouseOver={() => setValue1({ type: "increment" })}>+</button>
    </>
  );
};

export default Usereducer;
