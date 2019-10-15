import { HomeMarker } from "./HomeMarker";
import React from "react";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import TaxiMarkers from "./TaxiMarkers";

const MainMap = ({ api }) => {
  const { drivers, loading, splytHQ, shown, processDrivers } = api;

  return (
    <>
      <Map center={splytHQ.toArray()} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {!loading && (
          <TaxiMarkers drivers={processDrivers(drivers)} shown={shown} />
        )}
        <HomeMarker splytHQ={splytHQ} />
      </Map>
    </>
  );
};

export default MainMap;
