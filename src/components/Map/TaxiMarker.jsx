import React from "react";

import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "./markerIcon";

import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import Position from "../../lib/Position";

const TaxiMarker = props => {
  const { driver, splytHQ } = props;
  const { driver_id, location } = driver;
  const { latitude, longitude, bearing } = location;

  const position = new Position(latitude, longitude);

  return (
    <Marker position={[latitude, longitude]} icon={Icon}>
      <Popup>
        <LocalTaxiIcon />
        <p>{driver_id}</p>
        <p>Distance: {position.distanceTo(splytHQ)} km</p>
        <p>Bearing: {bearing}</p>
      </Popup>
    </Marker>
  );
};

export default TaxiMarker;
