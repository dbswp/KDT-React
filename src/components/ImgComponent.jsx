import img from "../Images/Toy-Story-3_3840x2160.jpg";
// 이미지를 import할 때는 이미지의 경로가 무조건 src안에 있어야한다.

function ImgComponent() {
  // 기능 부분
  const a = 500;
  return <img src={img} alt="logo" width={a} />;
}

export default ImgComponent;

// import React, { Component } from "react";
// import img from "../Images/Toy-Story-3_3840x2160.jpg";

// class ImgComponent extends Component {
//   render() {
//     return <img src={img} alt="logo" width="500" />;
//   }
// }

// export default ImgComponent;
