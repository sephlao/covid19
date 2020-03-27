import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
      const data = await fetch(url)
        .then(data => data.json())
        .catch(error => setError(error))
        .finally(() => setLoading(false));
      setData(data);
      } catch(e) {
        console.error(e)
      }
    })();
  }, [url]);

  return [data, error, isLoading];
};

export default { useFetch };
