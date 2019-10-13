import React from 'react'
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

const TaxiMarker = (props) => {
  const { driver } = props
  const { driver_id, location } = driver
  const { latitude, longitude, bearing } = location
  return (
    <Marker position={[latitude, longitude]} icon={DefaultIcon}>
      <Popup>
        <LocalTaxiIcon />
        <p>{driver_id}</p>
        <p>Bearing: {bearing}</p>
      </Popup>
    </Marker>
  )
}

export default TaxiMarker
