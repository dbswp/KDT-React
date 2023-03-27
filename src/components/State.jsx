// import React from "react";

// export default function State() {
//   const teach = "윤제";

//   function inEnglish() {
//     const spanEl = document.querySelector("#text");
//     spanEl.innerHTML = "tetz";
//   }

//   return (
//     <div>
//       <button onClick={() => inEnglish()}>영어로!</button>
//       <br />
//       <span id="text">{teach}</span>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class State extends Component {
  // 구버전
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       teacher: "이호석",
  //     };
  //   }

  state = {
    teacher: "이호석",
  };
  render() {
    const { teacher } = this.state;
    return (
      <div>
        <h1>{teacher}</h1>
        <button onClick={() => this.setState({ teacher: "tetz" })}>
          영어로
        </button>
      </div>
    );
  }
}
