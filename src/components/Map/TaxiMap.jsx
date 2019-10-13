import React from "react";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import TaxiMarker from './TaxiMarker'

const position = [51.5049375, -0.0964509];
const zoom = 14;

const MainMap = ({ data, isLoading }) => {

  return (
    <>
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {!isLoading && data.drivers.map((driver, idx) => <TaxiMarker driver={driver} key={idx} />)}
      </Map>
    </>
  );

}

export default MainMap;
