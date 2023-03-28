import "./App.css";
import React from "react";
// import Examples2 from "./components/Examples2";
// import Examples from "./components/Examples";
// import State from "./components/State";
// import State2 from "./components/State2";
// import UsesState from "./components/UseState";
// import Condition from "./components/Condition";
// import MainHeader from "./components/MainHeader";
// import BtnToNaver from "./components/BtnToNaver";
// import ImgComponent from "./components/ImgComponent";
// import Inline from "./components/Inline";
// import EventHandler from "./components/EventHandler";
// import StateProblem from "./components/StateProblem";
// import List from "./components/List";
// import Props from "./components/Props";
// import MultiProps from "./components/MultiProps";
// import ClassProps from "./components/ClassProps";
// import CustomList from "./components/CustomList";
import ChangeObj from "./components/ChangeObj";

function App() {
  // const nameArr = ["뽀로로", "루피", "크롱이"];
  const nameObj = [
    {
      name: "뽀로로",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "루피",
      age: "5",
      nickName: "사고뭉치",
    },
    {
      name: "크롱",
      age: "5",
      nickName: "사고뭉치",
    },
  ];
  return (
    <div className="App">
      {/* <MainHeader /> */}
      {/* <BtnToNaver /> */}
      {/* <ImgComponent /> */}
      {/* <Inline /> */}
      {/* <EventHandler /> */}
      {/* <Examples /> */}
      {/* <State /> */}
      {/* <State2 /> */}
      {/* <StateProblem /> */}
      {/* <Props text="Hello " /> */}
      {/* <Props text="My " /> */}
      {/* <Props text="Name " /> */}
      {/* <MultiProps text="Go naver" href="https://www.naver.com" userID="tetz" /> */}
      {/* <List /> */}
      {/* <CustomList arr={nameArr} /> */}
      {/* <CustomList obj={nameObj} /> */}
      {/* <UsesState /> */}
      {/* <Examples2 /> */}
      {/* <Condition /> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="Pororo" /> */}
      <ChangeObj arr={nameObj} />
    </div>
  );
}

export default App;
