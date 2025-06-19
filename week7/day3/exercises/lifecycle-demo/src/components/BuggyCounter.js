import React, { useState } from "react";

export default function BuggyCounter() {
  const [counter, setCounter] = useState(0);

  if (counter === 5) {
    throw new Error("I crashed!");
  }

  return (
    <h1 onClick={() => setCounter((c) => c + 1)}>
      {counter}
    </h1>
  );
}
