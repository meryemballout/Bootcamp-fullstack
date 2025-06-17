import React, { useState } from "react";

function Phone() {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhone({ ...phone, color: "blue" });
  };

  return (
    <div>
      <h1>Brand: {phone.brand}</h1>
      <h1>Model: {phone.model}</h1>
      <h1>Color: {phone.color}</h1>
      <h1>Year: {phone.year}</h1>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
}

export default Phone;
