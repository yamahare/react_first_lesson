import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMemo } from '../../store/memos';

function DelForm(props){
    const [delNumber, setDelNumber] = useState();
    const dispatch = useDispatch();
    const memos = useSelector(state => state);
    const input = {
       fontSize: '12px',
       color: '#006',
       padding: '1px',
       margin: '5px 0px'
    }
    const btn = {
        fontSize: '10px',
        color: '#006',
        padding: '2px 10px'
    }
    const doChange = e => {
        setDelNumber(e.target.value)
    }
    const doAction = e => {
        e.preventDefault();
        let action = deleteMemo(delNumber);
        dispatch(action);
        setDelNumber(0)
    }
    let n = 0;
    let items = memos.data.map((value)=>(
        <option key={n} value={n++}>{value.message}</option>
    ))

    return (
        <div>
            <form onSubmit={doAction}>
                <select onChange={doChange} defaultValue="-1" style={input}>
                    {items}
                </select>
                 <input type="submit" style={btn} value="Del" />
            </form>
        </div>
    )
}

export default DelForm;
