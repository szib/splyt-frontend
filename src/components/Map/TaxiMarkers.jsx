import React from "react";

import TaxiMarker from "./TaxiMarker";

const TaxiMarkers = ({ drivers, shown }) => {
  return (
    <>
      {drivers.slice(0, shown).map((driver, idx) => (
        <TaxiMarker driver={driver} key={idx} />
      ))}
    </>
  );
};

export default TaxiMarkers;
