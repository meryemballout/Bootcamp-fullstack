import React, { useState } from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundaryWrapper from "./components/ErrorBoundry";
import Child from "./components/child"; 

function App() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h2>Simulation 1 : 2 composants dans 1 boundary</h2>
      <ErrorBoundaryWrapper>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundaryWrapper>

      <h2>Simulation 2 : 1 composant par boundary</h2>
      <ErrorBoundaryWrapper><BuggyCounter /></ErrorBoundaryWrapper>
      <ErrorBoundaryWrapper><BuggyCounter /></ErrorBoundaryWrapper>

      <h2>Simulation 3 : sans ErrorBoundary (ça crashe !)</h2>
      <BuggyCounter />

      <h2>Unmounting test</h2>
      {showChild && <Child />}
      <button onClick={() => setShowChild(false)}>Delete</button>
    </div>
  );
}

export default App;
