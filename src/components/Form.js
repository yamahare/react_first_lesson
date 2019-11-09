import React, { useState } from 'react';

function Form(){
    const [message, setMessage] = useState("お名前どぞ～");

    let doChange = (event) => {
        let in_val = event.target.value;
        setMessage('こんにちは'+ in_val + 'さん');
    }
    return (
        <div>
            <p>{message}</p>
            <div>
                <input type="text" id="input" onChange={doChange} />
            </div>
        </div>
    )
}

export default Form;