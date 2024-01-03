import './App.scss';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Jolt Pay Logo" />
        <h1>Jolt Pay</h1>
      </header>
    </div>
  );
}

export default App;
