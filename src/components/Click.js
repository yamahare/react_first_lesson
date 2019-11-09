import React, { useState } from 'react';

function Click(){
    const [counter, setCounter] = useState(0);

    function doAction() {
        alert('おしたね？')
    }

    return (
        <div>
            <p>
               count: {counter} 
            </p>
            <button onClick={() => setCounter(counter+1)}>カウントアップ</button>
            <button onClick={doAction}>押してね</button>
        </div>
    )
}

export default Click;