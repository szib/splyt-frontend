import React from "react";
import { Map, TileLayer } from "react-leaflet";

import { useAPI, useParams } from 'react-api-hooks'

import 'leaflet/dist/leaflet.css';

import TaxiMarker from './TaxiMarker'

const position = [51.5049375, -0.0964509];
const zoom = 14;

const MainMap = () => {
  const apiUrl = `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509`;
  const corsAnywhereUrl = `https://cors-anywhere.herokuapp.com/`;
  const url = `${corsAnywhereUrl}${apiUrl}`;

  const { params, updateParams } = useParams({ count: 10 })
  const { data, isLoading, error } = useAPI(url, { params })

  if (error) {
    return <div>API Error</div>
  }

  return (
    <>
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {!isLoading && data.drivers.map((driver, idx) => <TaxiMarker driver={driver} key={idx} />)}
      </Map>
      <button onClick={() => updateParams({ count: params.count + 1 })}>Increment</button>
      {isLoading && <div>Loading...</div>}
    </>
  );

}

export default MainMap;
