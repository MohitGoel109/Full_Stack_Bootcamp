import React from 'react'
import Child from './Child'
const Parent = () => {
    const name = "Mukesh";
    const property = "5 bigha  gaon wala zameen hai";
  return (
    <>
    <div>Parent</div>
    <h1>{name}</h1>
    <Child property={property}/>
    </>
  )
}

export default Parent