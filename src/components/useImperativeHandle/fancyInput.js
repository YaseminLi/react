import React, { useImperativeHandle, useState, useRef } from "react";
const FancyInput = React.forwardRef((props, ref) => {
  const [value, setValue] = useState("init");
  const inputRef = useRef();
  useImperativeHandle(ref, (data) => ({
    focus: (data) => {
      inputRef.current.focus();
      setValue(data);
    },
  }));
  return (
    <>
      <input ref={inputRef} />
      value:{value}
    </>
  );
});

export default FancyInput;
