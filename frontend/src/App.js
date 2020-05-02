import React from 'react';
import logo from './assets/dumpster_diver.png';
import './App.css';
import TallyCounter from './TallyCounter'

function App() {
  return (
    <div className="App">
      <h1>Dumpster Divers</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Count is <TallyCounter/>
        </p>
      </header>
    </div>
  );
}

export default App;
