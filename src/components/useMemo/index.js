import { useState, useMemo } from "react";

const MemoHook = (props) => {
  const [count, setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  const update = () => {
    console.log("update count", count);
    setCount(count + 1);
    if (count > 3) {
      setShowWarning(true);
    }
  };

  const warning = useMemo(() => {
    // 渲染期间执行，不要执行与渲染无关的操作
    console.log("warning init");
    return showWarning ? "Don't click !" : "";
  }, [showWarning]);
  return (
    <div>
      <h2>memoHook</h2>
      <button onClick={update}>click to add 1</button>
      <div>{count}</div>
      {warning}
    </div>
  );
};

export default MemoHook;
