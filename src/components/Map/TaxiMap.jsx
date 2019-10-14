import React from "react";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

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
      </Map>
    </>
  );
};

export default MainMap;
