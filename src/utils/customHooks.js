import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return [data, error, isLoading];
};

export default { useFetch };
