import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Text</button>
      {show && <p>This text is visible</p>}
    </div>
  );
};

export default ShowHide;