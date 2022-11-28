import { useState, useEffect } from 'react';

/**
 * @param {function} getData
 * @returns 
 */
export function useData(getData) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setIsLoading(true);
      const data = await getData();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { data, isLoading, error, load };
}
