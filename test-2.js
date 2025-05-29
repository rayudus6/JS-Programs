

import React from 'react';
import {useState} from 'react'


function Count(){
    const [count,setCount]=useState(0)

    handleIncrease=() =>{
        setCount(count +1)
    }
    handleDecrease=() =>{
        setCount(count -1)
    }
    return(
        <div>
            <h2>Count--{Count}</h2>
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleDecrease}>-1</button>
        </div>
    )
}