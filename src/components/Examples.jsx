import React from "react";

export default function Examples() {
  const styleEl = {
    marginTop: "32px",
    backgroundColor: "skyblue",
  };
  const hellostr = "Hello, first exercise";
  return (
    <div
      style={styleEl}
      onClick={() => {
        alert("클릭됨");
      }}
    >
      {hellostr}
    </div>
  );
}
