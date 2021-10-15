import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then(response => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return [data, isLoading, error];
}

export default useRequestData;