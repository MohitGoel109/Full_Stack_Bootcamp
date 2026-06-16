import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectOne = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    console.log("rendering component")
    
    useEffect(() => {
        if (count > 0) {
            alert("count button clicked ")
        }
    }, [count])

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <>
    <div>UseEffectOne</div>
    
    <h1>Count 1: {count}</h1>
    <h1>Count 2: {count2}</h1>
    
    <button onClick={handleClick}>Button1</button>
    <button onClick={() => setCount2(count2 + 1)}>Button2</button>
    </>
  )
}

export default UseEffectOne