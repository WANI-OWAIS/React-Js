import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
   
 let [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter + 1)
  }

  const removeValue = () =>{
     if(counter > 0){
      setCounter(counter - 1)
     }
  }

  return (
    <>
     <h1>COUNTER APP</h1>
     <h2>Counter Value: {counter}</h2>

     <button
     onClick={addValue}
     
     >Add value</button>

     <br />

     <button
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
