import React, { useState } from 'react';
import Timer from './Timer';

export default function TimerRender() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Timer />}
      <br />
      <button onClick={() => setShow(!show)}>버튼</button>
    </>
  );
}
