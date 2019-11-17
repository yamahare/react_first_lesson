import React, { useState, useEffect, useContext } from 'react';
import CounterContext from '../contexts/counter'

function Countup(){
    const [counter, setCounter] = useState(0);
    const dataContext = useContext(CounterContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter+1)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>{dataContext}</h2>
            <p>
               count: {counter} 
            </p>
        </div>
    )
}

export default Countup;