import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Form from './components/Form';
import Click from './components/Click';
import Countup from './components/Countup';
import Welcome from './components/Welcome';
import * as serviceWorker from './serviceWorker';

let elm = (
    <div>
        <App></App>
        <Countup></Countup>
        <Click></Click>
        <Form></Form>
        <Welcome name="Taro" old="14"></Welcome>
        <Welcome name="砂糖" old="20"></Welcome>
    </div>
);
ReactDOM.render(elm, document.getElementById('root'));

serviceWorker.unregister();
