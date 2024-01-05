import React, { useState } from 'react'
import './StateTutorial.css'


const StateTutorial = () => {
    
    const [inputValue, newChangeValue]= useState("Arun");

    const onChange =(event)=>{
        const newval = event.target.value;
        newChangeValue(newval);
    }
 
  return (
    <div className='tutorial'>
        <h1>{inputValue}</h1>
        <input className='input' type="text" value={inputValue} placeholder='type a any value' onChange={onChange}/>
    </div>
  )
}

export default StateTutorial