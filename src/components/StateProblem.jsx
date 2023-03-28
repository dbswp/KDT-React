import React, { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState({
    teacher: "이호석",
    age: "26",
    cont: "seoul",
  });
  // 객체 타입은 주소와 그 안에 저장되어있는 값과 같이 들어있다.
  // useState([0])에는 특정 주소 안에 [0]이 들어있음
  // 하지만 useState([1])이라 해도 같은 주소라 리랜더링이 안됨
  console.log(state);
  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher = "tetz";
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}
