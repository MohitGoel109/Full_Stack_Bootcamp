import React,{useState} from 'react'
import UseEffectOne from './UseEffectOne'
import Timer from './Timer'
import WindowResize from './WindowResize'
import Routing from './Routing'
const App = () => {
  
  return (
    <div>
      <h1>useEffect Example</h1>
      <UseEffectOne />
      <h2>Timer</h2>
      <Timer />
      <WindowResize />
      
      
    </div>
  )
}

export default App