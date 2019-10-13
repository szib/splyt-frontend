import React from 'react'
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix importing images for icon
// TODO: custom icon
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
// END: Fix importing images for icon

const TaxiMarker = (props) => {
  const { driver } = props
  const { driver_id, location } = driver
  const { latitude, longitude, bearing } = location
  return (
    <Marker position={[latitude, longitude]}>
      <Popup><h1>{driver_id}</h1><h3>Bearing: {bearing}</h3></Popup>
    </Marker>
  )
}

export default TaxiMarker
