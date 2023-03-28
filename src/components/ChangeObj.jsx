import React, { useState } from "react";

export default function ChangeObj({ arr }) {
  const [state, setState] = useState(0);
  let obj = arr[state];
  return (
    <div>
      <div>
        <h1>이름 : {obj.name}</h1>
        <h2>나이 : {obj.age}</h2>
        <h3>별명 : {obj.nickName}</h3>
      </div>
      <button
        onClick={() => {
          if (arr.length - 1 > state) {
            setState(state + 1);
          } else {
            setState(0);
          }
        }}
      >
        Change
      </button>
    </div>
  );
}
