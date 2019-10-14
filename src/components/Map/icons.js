import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import splytIcon from "../../assets/splytMarker.png";

export const PinIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

export const SplytIcon = L.icon({
  iconUrl: splytIcon
  // shadowUrl: iconShadow
});
