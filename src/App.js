import React from "react";
import TaxiMap from "./components/Map/TaxiMap";

import "./App.css";

function App() {
  const position = [51.5049375, -0.0964509];
  const zoom = 13;
  return (
    <div className="App">
      <h1>Splyt Taxi Map</h1>
      <TaxiMap position={position} zoom={zoom} />
    </div>
  );
}

export default App;
