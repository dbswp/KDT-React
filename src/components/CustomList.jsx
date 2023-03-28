import React from "react";

export default function CustomList(props) {
  if (props.obj) {
    const { name, age, nickName } = props.obj;
    return (
      <div>
        {/* 배열 */}
        {/* <ul>
          값이 확실하게 들어오는지 모르면 key에 ?를 붙여주면, ? 뒤가 undefined면 뒤의 부분 실행X
          해당 key의 값이 들어 왔을때 뒤의 chain을 참조한다.
          {props.arr?.map((el, idx) => {
            return <li key={idx}>{el}</li>;
          })}
        </ul> */}
        {/* // 객체 */}
        <div>
          <h1>이름 : {name}</h1>
          <h2>나이 : {age}</h2>
          <h3>별명 : {nickName}</h3>
        </div>
      </div>
    );
  } else {
    return <div>데이터가 없습니다.</div>;
  }
}
