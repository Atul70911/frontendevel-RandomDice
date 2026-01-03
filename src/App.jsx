import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import VantaBackground from "./components/VantaBackground"
import Output from "./components/Output"

function App() {
  const [num, setNum] = useState("");
  const [gen,setGen]=useState("not-done");

  return (
    <VantaBackground>
      <h1>Number Of Dices</h1>
      <Form num={num} setNum={setNum} gen={gen} setGen={setGen} />
      <Output num={num} gen={gen} setGen={setGen} />
    </VantaBackground>
    

  
  )
}

export default App
