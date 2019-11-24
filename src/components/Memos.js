import React from 'react';
import Item from './Item';
import { useDispatch, useSelector } from 'react-redux';

function ReduxMessage(){
    const dispatch = useDispatch();
    const memos = useSelector(state => state);
    let n = 0;

    return (
        <div>
            <table>
              <tbody>
                {memos.data.map((value)=>(
                    <Item key={value.message} value={value} index={n++} />
                ))}
              </tbody>
            </table>
        </div>
    )
}

export default ReduxMessage;
