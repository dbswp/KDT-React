import React from 'react';
import { useState, useRef } from 'react';

export default function Carculator() {
  const [again, setAgain] = useState(true);
  const inputEl = useRef();

  const num1 = Math.floor(Math.random() * (9 - 0) + 1);
  const num2 = Math.floor(Math.random() * (9 - 0) + 1);
  const arithmeticArr = ['+', '-', 'x'];
  // const arithmeticArr = '+-x';
  const randomArithmetic = Math.floor(Math.random() * arithmeticArr.length);
  // randomArithmetic += arithmeticArr.charAt(
  //   Math.floor(Math.random() * arithmeticArr.length)
  // );
  const oprator = arithmeticArr[randomArithmetic];
  console.log(oprator);
  // console.log(randomArithmetic);

  const clearInput = () => {
    inputEl.current.value = '';
    inputEl.current.focus();
  };

  const checkAnser = () => {
    let answer = 0;
    if (randomArithmetic === 0) {
      answer = num1 + num2;
    } else if (randomArithmetic === 1) {
      answer = num1 - num2;
    } else {
      answer = num1 * num2;
    }

    if (answer === Number(inputEl.current.value)) {
      alert('정답입니다.');
      setAgain(!again);
      clearInput();
    } else {
      alert('오답입니다.');
      clearInput();
    }
  };

  return (
    <div>
      <h1>
        {num1}
        {oprator}
        {/* {randomArithmetic} */}
        {num2}
      </h1>
      <input type="text" ref={inputEl} />
      <button onClick={checkAnser}>정답 제출</button>
      <br />
    </div>
  );
}
