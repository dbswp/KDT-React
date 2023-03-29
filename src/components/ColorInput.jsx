import React, { useRef } from 'react';

export default function ColorInput() {
  const divEl = useRef();
  const inputEl = useRef();

  const changeColor = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
