import { useState, useRef } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요!');

  const inputValue = useRef('ID를 입력해');
  // 초기값은 inputValue.current에 저장

  // state 사용
  // const onChangeText = (e) => {
  //   const inputText = e.target.value;
  //   setText(inputText);
  // };

  // useRef 사용
  const onChangeRef = () => {
    setText(inputValue.current.value);
    // inputValue.current.value = input태그에 작성되고있는 값
  };
  console.log(inputValue.current);
  return (
    <div>
      <h1>{text}</h1>
      <h1>{inputValue.current}</h1>
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
