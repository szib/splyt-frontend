import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

import { Marker, Popup } from "react-leaflet";
import { SplytIcon } from "./icons";

export function HomeMarker({ splytHQ }) {
  return splytHQ ? (
    <Marker position={splytHQ.toArray()} icon={SplytIcon}>
      <Popup>
        <HomeIcon color="primary" fontSize="large" />
        <Typography variant="h6" color="primary">
          Splyt HQ
        </Typography>
      </Popup>
    </Marker>
  ) : null;
}
