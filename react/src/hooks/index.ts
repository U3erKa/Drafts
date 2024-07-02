import { useDebugValue, useEffect, useState, type RefObject, type SetStateAction } from 'react';

export function useData(getData: (...args: any[]) => Promise<SetStateAction<never[]>>) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useDebugValue({ isLoading, error });

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

  return [click, handleClick] as const;
}

export function useClickerRef(elemRef: RefObject<HTMLElement>) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick((click) => click + 1);
  };

  useEffect(() => {
    const elem = elemRef.current;
    if (!elem) return;
    elem.addEventListener('click', handleClick);
    return () => {
      elem.removeEventListener('click', handleClick);
    };
  }, [elemRef]);

  return [click, handleClick] as const;
}
