import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="eyebrow">SYS.01_COUNTER</div>
      <h2 style={{ color: "var(--neon-green)", margin: "10px 0" }}>Counter: {count}</h2>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;