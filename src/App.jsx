import React from "react";

import useSplytApi from "./hooks/useSplytApi";

import TaxiMap from "./components/Map/TaxiMap";
import AppBar from "./components/AppBar";

import "./App.css";

const initialCount = 10;

function App() {
  const api = useSplytApi({ count: initialCount });
  const { isLoading, error, updateParams } = api;

  const sliderChangeHandler = value => {
    updateParams({ count: value });
  };

  if (error) {
    return <div>API Error</div>;
  }

  return (
    <>
      <AppBar
        count={api.params.count}
        onChange={sliderChangeHandler}
        disabled={isLoading}
      />
      <TaxiMap {...api} />
    </>
  );
}

export default App;
