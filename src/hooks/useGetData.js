import { useState, useEffect } from "react";

const useGetData = (apiEndpoint) => {
  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDataFetch = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    fetch(apiEndpoint, getDataFetch)
      .then((response) => response.json())
      .then((response) => {
        setGetData(response);
      
      })
      .catch((err) => {
        console.error(err);
     
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiEndpoint]);
  return { getData, loading };
};


export default useGetData;
