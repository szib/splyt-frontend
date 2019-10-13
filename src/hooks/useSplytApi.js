import { useAPI, useParams } from "react-api-hooks";

const useSplytApi = ({ count }) => {
  const apiUrl = `https://qa-interview-test.qa.splytech.io/api/drivers?latitude=51.5049375&longitude=-0.0964509`;
  const corsAnywhereUrl = `https://cors-anywhere.herokuapp.com/`;
  const url = `${corsAnywhereUrl}${apiUrl}`;

  const paramsObj = useParams({ count });
  const apiObj = useAPI(url, { params: paramsObj.params });

  return { ...apiObj, ...paramsObj };
};

export default useSplytApi;
