import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ReduxMessage(){
    const dispatch = useDispatch();
    const counter = useSelector(state => state);

    return (
        <div>
            <p>{counter.message}</p>
            <p>{counter.count} </p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>カウントアップ</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>カウントダウン</button>
        </div>
    )
}

export default ReduxMessage;
