import React, { useState } from 'react'
import './App.css'
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
    <>
      <div className="grid-backdrop" />
      <div className="noise-vignette" />
      <div className="scanlines" />

      <div className="section" style={{ textAlign: "center" }}>

        <div className="eyebrow">SYS.00_ROOT</div>
        <h1 className="glitch" data-text="App">App</h1>

        <h2 style={{ color: "var(--neon-green)", margin: "20px 0" }}>{count}</h2>

        <div className="flex" style={{ marginBottom: "20px" }}>
          <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
          <button className="btn btn-ghost" onClick={handleDecrement}>Decrement</button>
          <button className="btn btn-ghost" onClick={handleReset}>Reset</button>
        </div>

        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <Home />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <Counter />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <Toggle />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <InputExample />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <Liked />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <ShowHide />
        </div>
        <div className="panel" style={{ padding: "24px", margin: "16px 0" }}>
          <MultiForm />
        </div>

      </div>
    </>
  )
}

export default App