import React from "react";

import useSplytApi from "./hooks/useSplytApi";

import TaxiMap from "./components/Map/TaxiMap";
import AppBar from "./components/AppBar/AppBar";

import "./App.css";

function App() {
  const api = useSplytApi();

  return (
    <>
      <AppBar api={api} />
      <TaxiMap api={api} />
    </>
  );
}

export default App;
