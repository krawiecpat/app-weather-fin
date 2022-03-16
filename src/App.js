import React from 'react';
import logo from './simplelocalize-3.svg';
import './App.css';

import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
      </header>
      <Weather />
    </div>
  );
}

export default App;
