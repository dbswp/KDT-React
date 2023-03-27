const Inline = () => {
  const styleEl = {
    fontSize: "32px",
    backgroundColor: "tomato",
  };
  return (
    // 인라인 스타일은 {}로 전달해야한다.
    // jsx를 의미하는 {}안에 style을 전달한 {}를 써야한다.
    // style={{ fontSize: "32px", backgroundColor: "orange" }}
    <div style={styleEl}>Inline style</div>
  );
};

export default Inline;
