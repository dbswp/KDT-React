import React from "react";

export default function State() {
  const teach = "윤제";

  function inEnglish() {
    const spanEl = document.querySelector("#text");
    spanEl.innerHTML = "tetz";
  }

  return (
    <div>
      <button onClick={() => inEnglish()}>영어로!</button>
      <br />
      <span id="text">{teach}</span>
    </div>
  );
}
