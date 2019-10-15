import React from "react";

import "./App.css";
import useSplytApi from "./hooks/useSplytApi";
import TaxiMap from "./components/Map/TaxiMap";
import AppBar from "./components/AppBar/AppBar";

import ErrorPage from "./pages/Error";

function App() {
  const api = useSplytApi();

  if (api.error) return <ErrorPage error={api.error} />;

  return (
    <>
      <AppBar api={api} />
      <TaxiMap api={api} />
    </>
  );
}

export default App;
