import React, { useState } from "react";
// import { useState } from "react";

export default function Examples2() {
  const [num, setNum] = useState(1);

  return (
    <div>
      <br />
      <span id="text">{num}</span>
      <br />
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
