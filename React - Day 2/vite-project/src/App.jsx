import React,{useState} from 'react'
import Home from './Home'

const App = () => {

  const[count,setCount] = useState(0)
  const handleClick = () => {
    console.log("Clicked")
  setCount(count + 1)
  }
  const handledClick = () => {
    console.log("Clicked")
  setCount(count - 1)
  }
  return (
    <>
    <div><h1>App</h1></div>
    <h1>{count}</h1>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handledClick}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <Home />
    </>
  )
}

export default App