import React, { useEffect, useRef } from "react";
import Input from "./Input";
const UseRef = () => {
  const inputRef = useRef();
  // const buttonRef = useRef();
  useEffect(() => {
    // inputRef.current.focus();
    inputRef.current.handleKeyPress();
  }, []);
  console.log("parent rerendering");
  return (
    <div>
      <Input ref={inputRef}></Input>

      <button onClick={() => (inputRef.current.value = "purushoth")}>
        blur the input
      </button>
    </div>
  );
};

export default UseRef;
