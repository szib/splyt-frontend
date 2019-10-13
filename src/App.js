import React from "react";

import useSplytApi from "./hooks/useSplytApi";

import TaxiMap from "./components/Map/TaxiMap";
import TaxiSlider from "./components/TaxiSlider";

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
      <TaxiMap {...api} />
      <TaxiSlider
        onChange={sliderChangeHandler}
        disabled={isLoading}
        initialValue={initialCount}
      />
    </>
  );
}

export default App;
