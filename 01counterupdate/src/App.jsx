import { useState } from 'react'
import './App.css'

function App() {

  var [count, setCount] = useState(0)

  let increase = () => {
      setCount(count => count + 1)
      if(count >= 20){
        setCount(20)
        alert("You have reached the maximum limit")
      }
  }

  let decrease = () => {
    setCount(count - 1)

    if(count <= 0){
      alert("You have reached the minimum limit")
      setCount(0)
    }
  }


  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick = {increase} 
      style={{margin:"20px"}}>Increase Number</button>
      <button
      onClick={decrease}>Decrease Number</button>
    </>
  )
}

export default App
