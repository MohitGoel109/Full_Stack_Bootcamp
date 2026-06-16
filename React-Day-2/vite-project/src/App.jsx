import React, { useState } from 'react'
import Home from './Home'
import Toggle from './Toggle'
import InputExample from './InputExample'
import ShowHide from './ShowHide'
import MultiForm from './MultiForm'
import Counter from './Counter'
import Liked from './Liked'


const App = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      <h1>App</h1>

      <h2>{count}</h2>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <Home />
      <Counter />
      <Toggle />
      <InputExample />
      <Liked />

      <ShowHide />
      <MultiForm />

    </div>
  )
}

export default App