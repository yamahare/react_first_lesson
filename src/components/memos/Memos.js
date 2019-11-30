import React from 'react';
import Item from './Item';
import { useSelector } from 'react-redux';

function ReduxMessage(){
    const memos = useSelector(state => state);
    let n = 0;

    return (
        <div>
            <table>
              <tbody>
                {memos.mode === 'find' ? 
                  memos.fdata.map((value)=>(
                      <Item key={value.message} value={value} index={n++} />
                  ))
                 : 
                  memos.data.map((value)=>(
                      <Item key={value.message} value={value} index={n++} />
                  ))
                }
              </tbody>
            </table>
        </div>
    )
}

export default ReduxMessage;
