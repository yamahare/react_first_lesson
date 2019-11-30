import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findMemo } from '../../store/memos';

function FindForm(props){
    const [findText, setFindText] = useState();
    const dispatch = useDispatch();
    const input = {
       fontSize: '14px',
       color: '#006',
       padding: '0px',
    }
    const btn = {
        fontSize: '12px',
        color: '#006',
        padding: '1px 10px'
    }
    const doChange = e => {
        setFindText(e.target.value)
    }
    const doAction = e => {
        e.preventDefault();
        let action = findMemo(findText);
        dispatch(action);
    }
    return (
        <div>
            <form onSubmit={doAction}>
                <input type="text" size="10" onChange={doChange} style={input}
                value={findText} />
                <input type="submit" style={btn} value="Find" />
            </form>
        </div>
    )
}

export default FindForm;
