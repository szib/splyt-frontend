import React from "react";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SplytIcon } from "./icons";
import HomeIcon from "@material-ui/icons/Home";
import Typography from "@material-ui/core/Typography";

import TaxiMarker from "./TaxiMarker";

const MainMap = ({ data, isLoading, splytHQ }) => {
  return (
    <>
      <Map center={splytHQ.toArray()} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {!isLoading &&
          data.drivers.map((driver, idx) => (
            <TaxiMarker driver={driver} key={idx} splytHQ={splytHQ} />
          ))}
        <Marker position={splytHQ.toArray()} icon={SplytIcon}>
          <Popup>
            <HomeIcon color="primary" fontSize="large" />
            <Typography variant="h6" color="primary">
              Splyt HQ
            </Typography>
          </Popup>
        </Marker>
      </Map>
    </>
  );
};

export default MainMap;
