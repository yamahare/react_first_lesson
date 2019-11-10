import React, { useState, useEffect } from 'react';

function Rect(){
    const [data, setData] = useState([]);

    let msgStyle = {
        fontSize: "20pt",
        color: "#900",
        margin: "20px 0px",
        padding: "5px",
    }

    let area = {
        width: "500px",
        height: "500px",
        border: "1px solid blue",
        margin: "50px"
    }

    function doAction(e){
        let x = e.pageX;
        let y = e.pageY;
        let tempArray = Array.from(data);
        tempArray.push({x:x, y:y});
        setData(tempArray);
    }

    function draw(d){
        let s = {
            position: "absolute",
            left: (d.x - 25) + "px",
            top: (d.y - 25) + "px",
            width: "50px",
            height: "50px",
            backgroundColor: "#66f3",
        };
        return <div style={s}></div>
    }

    return (
        <div>
            <h1>Rect</h1>
            <h2 style={msgStyle}>show Rect</h2>
            <div style={area} onClick={doAction}>
                {data.map(value => draw(value))}
            </div>
        </div>
    )
}

export default Rect;