import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);
  const headers = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": localStorage.getItem("token"),
    }
  }

  useEffect(() => {
    axios
      .get(url, headers)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [url])

  return (data);
}

export default useRequestData;