import React from "react";

import { Marker, Popup } from "react-leaflet";
import { PinIcon } from "./icons";

import Typography from "@material-ui/core/Typography";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

const TaxiMarker = props => {
  const { driver } = props;
  const { location, distance } = driver;
  const { latitude, longitude, bearing } = location;

  return (
    <Marker position={[latitude, longitude]} icon={PinIcon}>
      <Popup>
        <LocalTaxiIcon color="primary" fontSize="large" />
        <Typography variant="h6" color="primary">
          Distance: {distance} km
        </Typography>
        <Typography variant="h6" color="primary">
          Bearing: {bearing}
        </Typography>
      </Popup>
    </Marker>
  );
};

export default TaxiMarker;
