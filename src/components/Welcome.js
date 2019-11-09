
import React from 'react';

function Welcome(props){
    return (
        <div>
            <p>
               ようこそ！ {props.name}  さん ({props.old})
            </p>
        </div>
    )
}

export default Welcome;