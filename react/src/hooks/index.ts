import { useState, useEffect, SetStateAction, MutableRefObject } from 'react';

export function useData(getData: (...args: any[]) => Promise<SetStateAction<never[]>>) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      setIsLoading(true);
      const data = await getData();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export function useClickerRef(elemRef: MutableRefObject<HTMLElement | undefined>) {
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
