import React, { useState } from 'react';
import PracticeTwo from './PracticeTwo';

export default function PracticeOne() {
  const [first, setFirst] = useState(1);

  const change = () => {
    first === 1 ? setFirst(2) : setFirst(1);
  };
  return (
    <>
      {first === 1 ? <h1>1번 컴포넌트</h1> : <PracticeTwo />}
      <button onClick={change}>{first}번</button>
    </>
  );
}

// import React, { useState } from 'react';
// import PracticeTwo from './PracticeTwo';

// export default function PracticeOne() {
//   const [first, setFirst] = useState(true);

//   const change = () => {
//     setFirst(!first);
//   };
//   return (
//     <>
//       {first ? <h1>1번 컴포넌트</h1> : <PracticeTwo />}
//       <button onClick={change}>변경</button>
//     </>
//   );
// }

// import React, { useState } from 'react';
// import PracticeTwo from './PracticeTwo';

// export default function PracticeOne() {
//   const [first, setFirst] = useState(1);

//   const change = () => {
//     first === 1 ? setFirst(2) : setFirst(1);
//   };
//   return (
//     <>
//       {first === 1 ? <PracticeOne  text={first}/> : <PracticeTwo text={first}/>}
//       <button onClick={change}>{first}번</button>
//     </>
//   );
// }
