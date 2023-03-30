import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function ConditiondalState() {
  const [condition, setCondition] = useState('보이기');
  const changeOn = () => {
    condition === '보이기' ? setCondition('감추기') : setCondition('보이기');
  };

  const conditionalRender = condition === '감추기' && <ConditionalRender />;

  return (
    <>
      {/* 조건문과 비슷한 느낌 둘다 true일때 jsx보이게 */}
      {conditionalRender}
      <br />
      <button onClick={changeOn}>{condition}</button>
      {conditionalRender}
    </>
  );
}
