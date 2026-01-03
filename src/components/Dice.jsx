import React from 'react'
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';
import { div } from 'three/tsl';
import './dice.css'

const Dice = ({key,value}) => {
  return (
    <div className="die">
      {value===1 && <Dice1/>}
      {value===6 && <Dice6/>}
      {value===5 && <Dice5/>}
      {value===4 && <Dice4/>}
      {value===3 && <Dice3/>}
      {value===2 && <Dice2/>}

    </div>
    
  )
}

export default Dice