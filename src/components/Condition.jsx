import React, { useState } from "react";

export default function Condition() {
  const [condition, setCondition] = useState(0);

  return (
    <div>
      <h1>{condition > 10 ? "😍" : "👍"} </h1>
      <h1>{condition}</h1>
      <button onClick={() => setCondition(condition + 1)}> 컨디션 변경</button>
    </div>
  );
}
