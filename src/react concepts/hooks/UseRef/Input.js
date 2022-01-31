import React, { useImperativeHandle, useState } from "react";

const Input = (props, ref) => {
  const [value, setValue] = useState(0);
  const [bool, setBool] = useState(false);
  console.log("im rendering ");
  const toggle = () => {
    setBool(!bool);
  };
  useImperativeHandle(ref, () => ({
    handleKeyPress: () => {
      setValue(value + 1);
      console.log("im here ");
    },
    toggle: () => toggle()
    // focus: () => ref.current.focus()
  }));
  return (
    <div>
      {value}
      <input ref={ref} />
    </div>
  );
};

export default React.forwardRef(Input);
