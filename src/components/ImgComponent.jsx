import img from "../Images/Toy-Story-3_3840x2160.jpg";

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
