import { useRef } from "react";
import FancyInput from "./fancyInput";
const Imperativehandle = () => {
  const inputRef = useRef();
  return (
    <>
      <h2>Imperativehandle</h2>
      <FancyInput ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus("props value");
        }}
      >
        click to focus input
      </button>
    </>
  );
};

export default Imperativehandle;
