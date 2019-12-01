import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello reactjs!!! good!!!
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button 
          onClick={() => {
            alert(Date().toLocaleString())
          }}
          style={{
            height: 50,
            width: 100,
            borderRadius: 5,
            backgroundColor: 'blue',
            fontSize: 20}}>456</button>
        <button 
          onClick={() => {
            alert('click!!!!')
          }}
          style={{
            height: 100,
            width: 200,
            borderRadius: 5,
            backgroundColor: 'green',
            fontSize: 24}}>123</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
