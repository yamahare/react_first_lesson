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
  const table = {
    fontSize: "16px",
    padding: "5px 50px",
  }
  const th = {
    color: 'white',
    backgroundColor: "#006",
    padding: "5px 15px",
  }
  const td = {
    color: 'black',
    padding: '5px 15px',
    border: '1px solid gray'
  }
  const data = [
      {name: 'Taro', mail: 'taro@mail.com', age: 45},
      {name: 'Hanako', mail: 'hanako@mail.com', age: 10},
      {name: 'Tanjiro', mail: 'tanjiro@mail.com', age: 20}
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

      {flg ? <p>trueだよ</p> : <p>falseだよ</p> }
      {(()=>
        <dl>test</dl> 
      )()}

      <table style={table}>
        <tr>
          <th style={th}>name</th>
          <th style={th}>mail</th>
          <th style={th}>age</th>
        </tr>
        {data.map((value) => (
          <tr>
            <td style={td}>{value.name}</td>
            <td style={td}>{value.mail}</td>
            <td style={td}>{value.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
