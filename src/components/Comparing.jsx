import React, { useRef, useState } from 'react';

// state, ref, 비교하는 코드 공부!!!
export default function Comparing() {
  const [cntState, setCntState] = useState(0);
  const cntRef = useRef(0);
  let cntVar = 0;

  const [render, setRender] = useState(true);

  const cntUpState = () => {
    setCntState(cntState + 1);
    console.log('State: ', cntState);
  };

  const cntUpRef = () => {
    cntRef.current += 1;
    console.log('Ref: ', cntRef.current);
  };

  const cntUpVar = () => {
    cntVar += 1;
    console.log('Variables: ', cntVar);
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State: {cntState}</h1>
      <h1>Ref: {cntRef.current}</h1>
      <h1>Variable: {cntVar}</h1>

      <button onClick={cntUpState}>state + 1</button>
      <button onClick={cntUpRef}>ref + 1</button>
      <button onClick={cntUpVar}>variable + 1</button>
      <button onClick={reRender}>render + 1</button>
    </div>
  );
}
