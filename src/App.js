import React, { useState } from 'react';
import './App.css';
import PracticeTimer from './components/PracticeTimer';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <PracticeTimer />}
      <button onClick={() => setShow((cur) => !cur)}>
        {show ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}

export default App;
