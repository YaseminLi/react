import React, { useState, useEffect } from "react";

const EffectHook = () => {
  console.log("EffectHook");
  const [count, setCount] = useState(0);

  const handleScroll = () => {
    console.log("scroll");
  };

  // 渲染之后执行（DOM已更新完毕）：第一次渲染&每次更新
  // 删除之前的effect,创建一个新的，可以看作是一种渲染结果
  useEffect(() => {
    // count:hook使用闭包机制
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // 清除：组件卸载时执行
    return () => {
      console.log("effecthook clear");
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <h3>hook</h3>
      <div>you have clicked {count} times</div>
      <button onClick={() => setCount(count + 1)}>clicked</button>
    </div>
  );
};

export default React.memo(EffectHook);
