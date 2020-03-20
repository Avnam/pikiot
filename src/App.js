import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'bootstrap';

function App() {

  function msg() {
    return 12;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          Learn Pitkiot :)
        
      </header>
      <input type="button" value="Click me" onclick="this.msg()"></input>
      {/* <input class="btn btn-primary" type="button" value="Input"></input> */}
    </div>
  );

  
}

export default App;
