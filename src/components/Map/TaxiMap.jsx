import React from "react";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';

import useSplytApi from '../../hooks/useSplytApi'
import TaxiMarker from './TaxiMarker'
import TaxiSlider from './TaxiSlider'

const position = [51.5049375, -0.0964509];
const zoom = 14;

const MainMap = () => {
  const api = useSplytApi({ count: 10 });
  const { data, isLoading, error, params, updateParams } = api

  if (error) {
    return <div>API Error</div>
  }

  const sliderChangeHandler = (value) => {
    updateParams({ count: value })
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
      <TaxiSlider onChange={sliderChangeHandler} disabled={isLoading} />
    </>
  );

}

export default MainMap;
