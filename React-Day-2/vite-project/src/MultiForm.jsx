import React, { useState } from 'react'

const MultiForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <div className="eyebrow">SYS.06_FORM</div>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
      />

      <h3 style={{ color: "var(--neon-cyan)", marginTop: "12px", fontSize: "13px" }}>{JSON.stringify(formData)}</h3>
    </>
  );
}

export default MultiForm