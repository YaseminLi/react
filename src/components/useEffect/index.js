import { useState } from "react";

import EffectClass from "./class";
import EffectHook from "./effectHook";

function Effect() {
  const [showClass, setshowClass] = useState(false);
  return (
    <div>
      <h2>Effct</h2>
      {showClass && <EffectClass />}
      {/* showClass变化时，Effecthook会重新创建 解决：React.memo()*/}
      <EffectHook />
      <div>
        showClass
        <input
          type="checkbox"
          onClick={(e) => {
            setshowClass(e.target.checked);
          }}
          value={showClass}
        />
      </div>
    </div>
  );
}

export default Effect;
