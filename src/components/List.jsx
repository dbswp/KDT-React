import React from "react";
// import Modal from "./Modal";
import ListChild from "./ListChild";

export default function List() {
  const dataArr = [
    {
      product: "PS5",
      prices: "685,000원",
    },
    {
      product: "에어 프라이어",
      prices: "5,000원",
    },
    {
      product: "사세 치킨윙",
      prices: "11,500원",
    },
  ];
  return (
    <div>
      {/* <ListChild product="오늘 해야할 일" prices="state 사용법 익히기" />
      <br />
      <ListChild product="코테 문제 풀기" prices="Lv 0 정복 가자" /> */}
      <br />
      <h1>오늘 해야할 일</h1>
      {/* react에서 map으로 배열 데이터를 그려줄때, uniqe한 key값 props로 부여해줘야함 */}
      {dataArr.map((el, index) => (
        <ListChild
          product={el.product}
          prices={el.prices}
          key={index}
        ></ListChild>
      ))}
      {dataArr.map((el, index) => {
        return (
          <div key={index} style={{ backgroundColor: "tomato" }}>
            <hr />
            <h1>제품 : {el.product}</h1>
            <p>가격 : {el.prices}</p>
          </div>
        );
      })}
    </div>
  );
}
