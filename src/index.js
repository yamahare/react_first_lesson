import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
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
import counterStore from './store/counter'
import ReduxMessage from './components/ReduxMessage'
import {memosStore, memosPStore} from './store/memos'
import Memos from './components/memos/Memos'
import * as serviceWorker from './serviceWorker';
import AddForm from './components/memos/AddForm';
import DelForm from './components/memos/DelForm';
import FindForm from './components/memos/FindForm';
import { store, pstore } from './store/counterPersist'
import CountupPersist from './components/CountupPersist'

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
        <Provider store={counterStore}>
            <ReduxMessage></ReduxMessage>
        </Provider>
        <hr></hr>
        <Provider store={memosStore}>
            <PersistGate loading={<p>loading...</p>} persistor={memosPStore}>
                <h1>Memo</h1>
                <AddForm></AddForm>
                <DelForm></DelForm>
                <FindForm></FindForm>
                <Memos></Memos>
            </PersistGate>
        </Provider>
        <hr></hr>
        <h1>永続化Reduxテスト</h1>
        <Provider store={store}>
            <PersistGate loading={<p>loading...</p>} persistor={pstore}>
                <CountupPersist></CountupPersist>
            </PersistGate>
        </Provider>

    </CounterContext.Provider>
);
ReactDOM.render(elm, document.getElementById('root'));

serviceWorker.unregister();