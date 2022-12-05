import { useState, useEffect } from 'react';

/**
 * @param {function} getData
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
      // @ts-expect-error
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

export function useClicker() {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick((click) => click + 1);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return [click, handleClick];
}


export function useClickerRef(/** @type {React.MutableRefObject} */ elemRef) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick((click) => click + 1);
  };

  useEffect(() => {
    const elem = elemRef.current;
    if (elem) {
      elem.addEventListener('click', handleClick);
    }
    return () => {
      if (elem) {
        elem.removeEventListener('click', handleClick);
      }
    };
  }, [elemRef]);

  return [click, handleClick];
}
