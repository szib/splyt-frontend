import React from "react";

import useSplytApi from "./hooks/useSplytApi";

import TaxiMap from "./components/Map/TaxiMap";
import AppBar from "./components/AppBar/AppBar";

import "./App.css";

function App() {
  const api = useSplytApi();

  if (api.error) {
    return (
      <>
        <h1>
          Error{" "}
          <span role="img" aria-label="sad face">
            😩
          </span>
        </h1>
        <h2>Please reload the page</h2>
        <div>{api.error.toString()}</div>
      </>
    );
  }

  return (
    <>
      <AppBar api={api} />
      <TaxiMap api={api} />
    </>
  );
}

export default App;
