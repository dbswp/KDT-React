// import React, { Component } from "react";

// class ClassComponent extends Component {
//   render() {
//     return <h1>Class Component 입니다.!</h1>;
//   }
// }

// export default ClassComponent;

const Functional = () => {
  const amszingJSX = () => {
    // 함수의 if 문 같은 복잡한? 은 안들어가진다.
    return "Functional Component 입니다.";
  };
  return <h1 className="test">{amszingJSX()}</h1>;
};

export default Functional;
