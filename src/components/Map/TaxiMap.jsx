import React from "react";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import TaxiMarkers from './TaxiMarkers'


const MainMap = (props) => {
  const { position, zoom } = props

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <TaxiMarkers />
    </Map>
  );

}

export default MainMap;
