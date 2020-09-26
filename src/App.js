import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './components/router'
// import Button from 'bootstrap';

function App() {

  // function msg() {
  //   return 12;
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
          Learn Pitkiot :)
        
      </header> */}
      <Router></Router>
    </div>
  );

  
}

export default App;
