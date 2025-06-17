import React from "react";
import Car from "./components/Car";
import Events from "./components/Events";
import Phone from "./components/Phone";

const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div>
      <Car carInfo={carinfo} />
      <Events />
      <Phone />
    </div>
  );
}

export default App;
