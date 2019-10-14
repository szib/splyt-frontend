import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

export default Icon;
