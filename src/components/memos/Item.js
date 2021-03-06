import React from 'react';

function Item(props){
    const th = {
        fontSize: '14px',
        backgroundColor: "blue",
        color: "white",
        padding: '5px 10px',
        width: '50px'
    }
    const td = {
        fontSize: '14px',
        backgroundColor: 'white',
        color: 'darkblue',
        padding: '5px 10px',
        border: '1px solid lightblue',
        minWidth: '300px'
    }
    const date = {
        fontSize: '14pt',
        backgroundColor: 'white',
        color: 'darkblue',
        padding: '5px 10px',
        border: '1px solid lightblue',
        width: '80px'
    }
    return (
        <tr>
            <th style={th}>No, {props.index}</th>
            <td style={td}>{props.value.message}</td>
            <td style={date}>{props.value.created}</td>
        </tr>
    )
}

export default Item;
