import React from "react";
import { Marker, Popup } from "react-leaflet";

import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

import { SplytIcon } from "./icons";

function HomeMarker({ splytHQ }) {
  return splytHQ ? (
    <Marker position={splytHQ.toArray()} icon={SplytIcon}>
      <Popup>
        <HomeIcon color="primary" fontSize="large" />
        <Typography variant="subtitle2" component="div" color="primary">
          Splyt HQ
        </Typography>
      </Popup>
    </Marker>
  ) : null;
}

export default HomeMarker;
