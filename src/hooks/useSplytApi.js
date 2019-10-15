import { useState } from "react";
import * as R from "ramda";
import useAxios from "@use-hooks/axios";
import Position from "../lib/Position";

const url = `http://localhost:8080/https://qa-interview-test.qa.splytech.io/api/drivers`;
const splytHQ = new Position(51.5049375, -0.0964509);

const distanceToSplytHQ = driver => {
  const { location } = driver;
  const pos = new Position(location.latitude, location.longitude);
  return pos.distanceTo(splytHQ);
};

const addDistance = driver =>
  R.set(R.lensProp("distance"), distanceToSplytHQ(driver), driver);

const sortByDistance = R.sortWith([R.ascend(R.prop("distance"))]);

const processDrivers = R.pipe(
  R.map(addDistance),
  sortByDistance
);

const getDrivers = R.pathOr([], ["data", "drivers"]);

// ========================================
//  HOOK
// ========================================
const useSplytApi = () => {
  const [count, setCount] = useState(50);
  const [shown, setShown] = useState(50);

  const { response, loading, error, reFetch } = useAxios({
    url: url,
    method: "GET",
    options: {
      params: { count, latitude: splytHQ.lat, longitude: splytHQ.long }
    },
    trigger: { count },
    forceDispatchEffect: () => !!count
  });

  const drivers = getDrivers(response);

  return {
    drivers,
    processDrivers,
    loading,
    error,
    splytHQ,
    reFetch,
    count,
    setCount,
    shown,
    setShown
  };
};

export default useSplytApi;
