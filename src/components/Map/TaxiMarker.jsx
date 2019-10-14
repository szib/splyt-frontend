import React from "react";

import { Marker, Popup } from "react-leaflet";
import { PinIcon } from "./icons";

import Typography from "@material-ui/core/Typography";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import Position from "../../lib/Position";

const TaxiMarker = props => {
  const { driver, splytHQ } = props;
  const { location } = driver;
  const { latitude, longitude, bearing } = location;

  const position = new Position(latitude, longitude);

  return (
    <Marker position={[latitude, longitude]} icon={PinIcon}>
      <Popup>
        <LocalTaxiIcon color="primary" fontSize="large" />
        <Typography variant="h6" color="primary">
          Distance: {position.distanceTo(splytHQ)} km
        </Typography>
        <Typography variant="h6" color="primary">
          Bearing: {bearing}
        </Typography>
      </Popup>
    </Marker>
  );
};

export default TaxiMarker;
