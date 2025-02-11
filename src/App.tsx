import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/botton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Button name={"chayan"}/> */}
          <Button name={{"name":"chayan"}} onClick={()=>{alert("7")}}/>
        </a>
      </header>
    </div>
  );
}

export default App;
