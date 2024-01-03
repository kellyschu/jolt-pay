import './App.scss';
import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import TopSellersPage from './pages/TopSellersPage/TopSellersPage';
import TransactionPage from './pages/TransactionPage/TransactionPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo">
          <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="Jolt Pay Logo" />
          <h1>Jolt Pay</h1>
          <p>Welcome to Jolt Pay!</p>
        </div>
        <div className="App-main">
          <Sidebar />
          <TopSellersPage />
          <TransactionPage />
        </div>
      </header>
    </div>
  );
}

export default App;
