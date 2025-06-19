import React, { useState } from "react";
import FormComponent from "./FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      ...formData,
      lactoseFree: formData.lactoseFree ? "on" : "off",
    }).toString();
    window.location.href = `http://localhost:3000/?${query}`;
  };

  return (
    <div>
      <h1>Form Container</h1>
      <FormComponent
        data={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
