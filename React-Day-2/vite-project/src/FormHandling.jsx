import React, { useState } from 'react'

const FormHandling = () => {
  const [name, setName] = React.useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
      <div className="eyebrow">SYS.07_GREET</div>
      <input type="text" placeholder="Enter name" onChange={handleChange} />
      <h2 style={{ color: "var(--neon-green)", marginTop: "10px" }}>Hello, {name}!</h2>
    </div>

  )
}

export default FormHandling