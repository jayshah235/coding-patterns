import { useEffect, useState } from "react";

/*
Note:: This is a basic custom service for fetching data
where we can get data, refetch function to load data again, loading and error state.
Depends upon the usecase we can modify it and implement caching
also if required and also we can set auth token and set dynamic payloads also.
*/

export const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const res = await response?.json();
        setData(res);
        if (!res.status) {
          throw new Error("something went wrong...");
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    })();
  }, [url]);

  const refetch = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const res = await response?.json();
      setData(res);
      if (!res.status) {
        throw new Error("something went wrong...");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { data, loading, error, refetch };
};
