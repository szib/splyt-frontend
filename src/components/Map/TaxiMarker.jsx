import React from "react";
import { Marker, Popup } from "react-leaflet";

import Typography from "@material-ui/core/Typography";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";

import { PinIcon } from "./icons";

const TaxiMarker = props => {
  const { driver } = props;
  const { location, distance } = driver;
  const { latitude, longitude, bearing } = location;

  return (
    <Marker position={[latitude, longitude]} icon={PinIcon}>
      <Popup>
        <LocalTaxiIcon color="primary" fontSize="large" />
        <Typography variant="subtitle2" component="div" color="primary">
          Distance: {distance} km
        </Typography>
        <Typography variant="subtitle2" component="div" color="primary">
          Bearing: {bearing}º
        </Typography>
      </Popup>
    </Marker>
  );
};

export default TaxiMarker;
