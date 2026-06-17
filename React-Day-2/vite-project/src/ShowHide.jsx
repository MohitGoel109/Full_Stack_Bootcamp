import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="eyebrow">SYS.05_VISIBILITY</div>
      <button className="btn btn-ghost" onClick={() => setShow(!show)}>Toggle Text</button>
      {show && <p>This text is visible</p>}
    </div>
  );
};

export default ShowHide;