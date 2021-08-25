import { useEffect, useRef } from "react";

const InputWithClickButton = () => {
  // 每次渲染时会返回同一个ref对象，其.current保存的值不变
  // 通过.current=xxx来更改保存的值，不会触发组件渲染,也不会通知变化
  // 两种用途

  // 1.DOMRefs
  // 以 <div ref={myRef} /> 形式传入组件，则无论该节点如何改变，React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。
  // 希望知道DOM变化，使用callbackRef
  const inputRef = useRef(null);

  // 2.存储任意值
  const intervalRef = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      console.log("interval", intervalRef.current);
    }, 10000);
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h2>useRef</h2>
      <div>
        <input ref={inputRef} />
      </div>
      <div>
        <button onClick={focusInput}>click to focus input</button>
      </div>
    </div>
  );
};

export default InputWithClickButton;
