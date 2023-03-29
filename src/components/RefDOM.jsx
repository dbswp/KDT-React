import React from 'react';
import { useRef } from 'react';

export default function RefDOM() {
  const orangeEl = useRef();
  const tomatoEl = useRef();
  const inputEl = useRef();

  const adjsutCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    tomatoEl.current.style.backgroundColor = 'tomato';
  };
  const clearInput = () => {
    inputEl.current.value = '';
  };

  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={tomatoEl}>Tomato</h1>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjsutCSS}>CSS 적용</button>
      <button onClick={clearInput}>인풋 초기화</button>
      <br />
    </div>
  );
}
