import React from "react";
import { useState } from "react";

// export default function UsesState() {
//   const [teach, setTeach] = useState("이호석");

//   return (
//     <div>
//       <button onClick={() => setTeach("tetz")}>영어로!</button>
//       <br />
//       <span id="text">{teach}</span>
//     </div>
//   );
// }

export default function UsesState() {
  // state변경 함수를 사용하지 않는다면 리랜더링이 되지 않음
  // state변경함수가 변경되면 react가 변경을 알아차리고 전달
  const [strState, setStrState] = useState("init");

  // 잘못된 접근
  // function changeState() {
  //   strState += "-";
  //   console.log(strState);
  // }

  return (
    <div>
      <button
        onClick={() => {
          setStrState(strState + "+");
        }}
      >
        반복!
      </button>
      {/* <button
        onClick={() => {
          changeState();
        }}
      >
        스테이트 강제 변경
      </button> */}
      <br />
      <span>{strState}</span>
    </div>
  );
}
