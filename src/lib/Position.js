import haversine from "haversine";

class Position {
  constructor(lat, long) {
    this.moveTo(lat, long);
  }

  moveTo(lat, long) {
    this.lat = lat;
    this.long = long;
  }

  toArray() {
    return [this.lat, this.long];
  }

  toObject() {
    return {
      latitude: this.lat,
      longitude: this.long
    };
  }

  distanceTo(position) {
    return haversine(this.toObject(), position.toObject(), {
      unit: "km"
    }).toFixed(2);
  }

  queryString() {
    return `latitude=${this.lat}&longitude=${this.long}`;
  }
}

export default Position;
