import React, { useState } from 'react';

function FormSubmit(props){
    const [message, setMessage] = useState("お名前どぞ～");
    let tmpMessage = '';

    let doChange = (event)=>{
        tmpMessage = `Hello, ${event.target.value}`;
        if(event.target.value.length > props.maxLength){
            props.onCheck(event);
            event.target.value = event.target.value.substr(0, props.maxLength);
        }
    }

    let doSubmit = (event) => {
        event.preventDefault();
        setMessage(tmpMessage);
    }

    return (
        <div>
            <h1>フォームサブミット</h1>
            <h2>{message}</h2>
            <form onSubmit={doSubmit}>
                <label>
                    <span>Message:</span>
                    <input type="text" id="input" onChange={doChange} required pattern="[A-Za-z _,.]+" />
                </label>
                <input type="submit" value="Click"></input>
            </form>
        </div>
    )
}

export default FormSubmit;