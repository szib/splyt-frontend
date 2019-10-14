import { useAPI, useParams } from "react-api-hooks";

import Position from "../lib/Position";

const useSplytApi = ({ count }) => {
  const splytHQ = new Position(51.5049375, -0.0964509);

  const apiUrl = `https://qa-interview-test.qa.splytech.io/api/drivers?${splytHQ.queryString()}`;
  const corsAnywhereUrl = `https://cors-anywhere.herokuapp.com/`;
  const url = `${corsAnywhereUrl}${apiUrl}`;

  const paramsObj = useParams({ count });
  const apiObj = useAPI(url, { params: paramsObj.params });

  return { ...apiObj, ...paramsObj, splytHQ };
};

export default useSplytApi;
