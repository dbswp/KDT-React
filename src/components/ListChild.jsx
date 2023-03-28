import React from "react";

export default function ListChild({ product, prices }) {
  return (
    <div>
      <hr />
      <h1>품목명 : {product}</h1>
      <p>가격 : {prices}</p>
    </div>
  );
}
