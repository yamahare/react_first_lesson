import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Form from './Form';
import Click from './Click';
import Countup from './Countup';
import * as serviceWorker from './serviceWorker';

let elm = (
    <div>
        <App></App>
        <Countup></Countup>
        <Click></Click>
        <Form></Form>
    </div>
);
ReactDOM.render(elm, document.getElementById('root'));

serviceWorker.unregister();
