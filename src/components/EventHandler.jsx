function EventHandler() {
  function alertF() {
    alert("클릭 됨.");
  }
  return (
    // 함수를 정의하고 alert해야 기다린다.
    // 정의하지 않으면 바로 실행
    <div>
      {/* <span onClick={alertF}>클릭됨</span>
      <span onClick={() => {alert("클릭됨");}}>클릭</span> */}
      <span
        onClick={() => {
          let num = 0;
          num += 5;
          console.log(num);
        }}
      >
        숫자계산
      </span>
    </div>
  );
}

export default EventHandler;
