import { useEffect, useState } from 'react'
import React from 'react'
import Dice from './Dice'
import './output.css'

const Output = ({num,gen,setGet}) => {
  const [numArray,setNumArray]= useState([]);

  useEffect(()=>{
 setNumArray(rollNDice(num));
  },[gen])

  const rollNDice=(n)=>{
    const c=Number(n);
    if (!c || c <= 0) return [];
    return Array.from({length:c},numGenerate);
  }
  const numGenerate=()=>{
      return Math.floor(Math.random()*6)+1;
  };

  return (
    <div className="output">
      {numArray.map((e,idx)=>(
        <Dice key={idx} value={e} />)
      )}
    </div>
  )
}

export default Output