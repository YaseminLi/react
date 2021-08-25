import { useCallback, useState } from "react";
const CallbackRef = () => {
  const [height, setHeight] = useState();

  const headerRef = useCallback((node) => {
    if (node) {
      const top = node.getBoundingClientRect().top;
      setHeight(top);
    }
  }, []);
  return (
    <>
      <h2 ref={headerRef} style={{ padding: 20 }}>
        CallbackRef
      </h2>
      <div>The header is {height}px tall.</div>
    </>
  );
};

export default CallbackRef;
