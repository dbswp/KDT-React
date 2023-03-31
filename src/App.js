import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const AppDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoSwitch = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${LogoSwitch} infinite 20s linear;
`;
const AppA = styled.a`
  color: #61dafb;
`;

function App() {
  return (
    <AppDiv>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.!!!!!!!
        </p>
        <AppA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppA>
      </AppHeader>
    </AppDiv>
  );
}

export default App;
