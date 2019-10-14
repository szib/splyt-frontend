import React from "react";

import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./markerIcon";

import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

const TaxiMarker = props => {
  const { driver } = props;
  const { driver_id, location } = driver;
  const { latitude, longitude, bearing } = location;
  return (
    <Marker position={[latitude, longitude]} icon={Icon}>
      <Popup>
        <LocalTaxiIcon />
        <p>{driver_id}</p>
        <p>Bearing: {bearing}</p>
      </Popup>
    </Marker>
  );
};

export default TaxiMarker;
