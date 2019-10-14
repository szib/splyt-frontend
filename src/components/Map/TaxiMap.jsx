import { HomeMarker } from "./HomeMarker";
import React from "react";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import TaxiMarkers from "./TaxiMarkers";

const MainMap = ({ api }) => {
  const { data, loading, error, splytHQ, shown } = api;

  if (error) {
    return <div>API Error</div>;
  }

  return (
    <>
      <Map center={splytHQ.toArray()} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {!loading && data && data.drivers && (
          <TaxiMarkers drivers={data.drivers} shown={shown} />
        )}
        <HomeMarker splytHQ={splytHQ} />
      </Map>
    </>
  );
};

export default MainMap;
