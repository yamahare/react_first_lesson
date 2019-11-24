import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMemo } from '../store/memos';

function AddForm(){
    const [message, setMessage] = useState();
    const dispatch = useDispatch();
    const memos = useSelector(state => state);
    const input = {
       fontSize: '16px',
       color: '#006',
       padding: '1px',
       margin: '5px 0px'
    }
    const btn = {
        fontSize: '14px',
        color: '#006',
        padding: '5px 0px'
    }
    const doChange = e => {
        setMessage(e.target.value)
    }
    const doAction = e => {
        e.preventDefault();
        let action = addMemo(message);
        dispatch(action);
        setMessage('');
    }

    return (
        <div>
            <p>{memos.message}</p>
            <form onSubmit={doAction}>
                <input type="text" size="40" onChange={doChange} 
                 style={input} value={message} required />
                 <input type="submit" style={btn} value="ADD" />
            </form>
        </div>
    )
}

export default AddForm;
