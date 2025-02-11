import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/botton'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          {/* <Button name={"chayan"}/> */}
          <Button name={{"name":"chayan"}} onClick={()=>{alert("7")}}/>
      </header>
    </div>
  );
}

export default App;
