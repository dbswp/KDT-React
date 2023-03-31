import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  // 데이터를 받아왔을 때 컴포넌트 다시 실행하기 위한 목적
  // useState에 저장된 배열값에는 주소가 저장
  const [dataArr, setDateArr] = useState([]);

  //통신 요청 await가 반환될때까지 기다렸다 resFetch에 값 저장
  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000/', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (resFetch.status !== 200) return '망했어요';

    // 전달받은 제이슨 데이터는 전달받는데 시간이 걸림
    // js에서 이해할수 있게 변경
    const data = await resFetch.json();
    console.log(data);
    setDateArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={el.name}
          />
        );
      })}
    </>
  );
}
