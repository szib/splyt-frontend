import { useState } from "react";

import useAxios from "@use-hooks/axios";

import Position from "../lib/Position";

const sortByDistance = (a, b) => a.distance - b.distance;
const addDistance = (driver, splytHQ) => {
  const { location } = driver;
  const pos = new Position(location.latitude, location.longitude);
  return { ...driver, distance: pos.distanceTo(splytHQ) };
};

const initialData = {
  pickup_eta: null,
  drivers: []
};

const useSplytApi = () => {
  const [count, setCount] = useState(50);
  const [shown, setShown] = useState(50);

  const splytHQ = new Position(51.5049375, -0.0964509);

  const apiUrl = `https://qa-interview-test.qa.splytech.io/api/drivers`;
  const corsAnywhereUrl = `https://cors-anywhere.herokuapp.com/`;
  const url = `${corsAnywhereUrl}${apiUrl}`;

  const { response, loading, error, reFetch } = useAxios({
    url: url,
    method: "GET",
    options: {
      params: { count, latitude: splytHQ.lat, longitude: splytHQ.long }
    },
    trigger: { count },
    forceDispatchEffect: () => !!count // AUTO RUN only if gender is set
  });

  const { data } = response || initialData;

  if (data && data.drivers) {
    const { drivers } = data;
    data.drivers = drivers
      .map(driver => addDistance(driver, splytHQ))
      .sort(sortByDistance);
  }

  return {
    data,
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
