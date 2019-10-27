import React from 'react';
import logo from './logo.svg';
import './App.css';

let printMsg = (msg, size, color) => {
  const p_style = {
    fontSize: `${size}px`,
    color: `${color}`,
    border: '1px solid blue'
  }
  return <p style={p_style}>{msg}</p>;
}

function App() {

  const url = 'https://yamahare.github.io/react_first_lesson/';
  const flg = true;
  const data = [
    <li>test1</li>,
    <li>test2</li>,
    <li>test3</li>
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {printMsg('最初のメッセージ', 30, '#ddd')}
        {printMsg('2番目メッセージ', 20, '#aaa')}
        {printMsg('3番目メッセージ', 10, '#333')}
        <a className="App-link" href={url} target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      {flg ?
        <p>trueだよ</p>
        :
        <p>falseだよ</p>
      }
      <ul>
        { data }
      </ul>
    </div>
  );
}

export default App;
