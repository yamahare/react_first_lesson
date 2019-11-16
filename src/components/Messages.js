import React from 'react';

function Messages(props){

    let content = props.children;
    let arr = content.split('。');
    let arr2 = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].trim() !== ''){
            arr2.push(arr[i]);
        }
    }
    let list = arr2.map((val, key)=>(
        <li key={key}>{val}.</li>
    ))

    return (
        <div>
            <ol>{list}</ol>
        </div>
    )
}

export default Messages;