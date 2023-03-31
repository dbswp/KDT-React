import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('버튼 클릭', { count });
    setCount((cur) => cur + 1);
  };

  const onInputChange = () => {
    console.log('키 입력', { text });
    setText(inputValue.current.value);
  };

  // 두번째 인자의 값에 따라 지정된 값 리랜더링
  useEffect(() => {
    console.log('버튼 클릭 할때마다 실행되는 useEffect');
  }, [count]);
  useEffect(() => {
    console.log('인풋입력 할때마다 실행되는 useEffect');
  }, [text]);

  // 두번째 인자를 전달하지 않으면 최초 마운트 시에만 실행된다.
  useEffect(() => {
    console.log('최초 할때마다 실행되는 useEffect');
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <br />
      <br />
      <br />
      <input type="text" ref={inputValue} onChange={onInputChange} />
      <h1>{text}</h1>
    </>
  );
}
