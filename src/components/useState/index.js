import { useState } from "react";
import Count from "./count";

const getInitCount = (props) => {
  console.log("🚀 ~ file: index.js ~ line 5 ~ getInitCount ~ props", props);
  return props.initCount;
};
const StateHook = (props) => {
  // 惰性初始化
  const [count, setCount] = useState(() => {
    const initCount = getInitCount(props);
    return initCount;
  });

  return (
    <div>
      <h2>stateHook</h2>
      <button onClick={() => setCount((pre) => pre + 1)}>click to add 1</button>
      <Count num={count} />
    </div>
  );
};

export default StateHook;
