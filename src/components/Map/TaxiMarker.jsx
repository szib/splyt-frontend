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
  const { position, popupHtml } = props
  return (
    <Marker position={position}>
      {popupHtml && <Popup>{popupHtml}</Popup>}
    </Marker>
  )
}

export default TaxiMarker
