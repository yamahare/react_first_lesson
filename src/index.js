import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Form from './components/Form';
import Click from './components/Click';
import Countup from './components/Countup';
import Welcome from './components/Welcome';
import Rect from './components/Rect';
import Messages from './components/Messages';
import FormSubmit from './components/FormSubmit';
import CounterContext from './contexts/counter'
import ReduxMessage from './components/ReduxMessage'
import * as serviceWorker from './serviceWorker';

const initialState = { 
    count: 0,
    message: "COUNTER"
};

const counter = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {
                count: state.count + 1,
                message: "INCREMENT"
            };
        case 'DECREMENT' :
            return {
                count: state.count - 1,
                message: "DECREMENT"
            };
        default:
            return state;
    }
}
let store = createStore(counter);

let contextValue = `コンテキストの値です ${Math.floor(Math.random() * Math.floor(10))}`;
let doCheck = (event)=>{
    alert(`${event.target.value}は長すぎます。`)
}

let elm = (
    <CounterContext.Provider value={contextValue}>
        <App></App>
        <Countup></Countup>
        <Click></Click>
        <Form></Form>
        <Welcome name="Taro" old="14"></Welcome>
        <Welcome name="砂糖" old="20"></Welcome>
        <Rect></Rect>
        <hr></hr>
        <Messages>
            これはコンポーネントないのコンテンツです。
            マルでテキストを分割し、リストにして表示します。
            改行は必要ありません。
        </Messages>
        <FormSubmit maxLength="10" onCheck={doCheck}></FormSubmit>
        <hr></hr>
        <h1>Reduxテスト</h1>
        <Provider store={store}>
            <ReduxMessage></ReduxMessage>
        </Provider>

    </CounterContext.Provider>
);
ReactDOM.render(elm, document.getElementById('root'));

serviceWorker.unregister();