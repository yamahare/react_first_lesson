import React, { useState, useEffect } from 'react';

function Countup(){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCounter(counter+1)
        }, 1000);
        return () => clearInterval(interval);
    }, [counter]);

    return (
        <div>
            <p>
               count: {counter} 
            </p>
        </div>
    )
}

export default Countup;