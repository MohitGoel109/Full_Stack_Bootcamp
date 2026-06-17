import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <div className="eyebrow">SYS.02_TOGGLE</div>
      <h2 style={{ color: isOn ? "var(--neon-green)" : "var(--neon-magenta)", margin: "10px 0" }}>
        {isOn ? "ON" : "OFF"}
      </h2>
      <button className="btn btn-ghost" onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
};

export default Toggle;