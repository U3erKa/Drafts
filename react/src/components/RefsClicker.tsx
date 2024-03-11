import { useClickerRef } from 'hooks';
import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export const RefsClicker = (props) => {
  const elemRef = useRef<HTMLDivElement>();
  const [clicks] = useClickerRef(elemRef);
  const inputRef: MutableRefObject<HTMLInputElement> = useRef(null!);
  const prevClicks = useRef(clicks);
  const renders = useRef(1);
  const [value, setValue] = useState(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  useEffect(() => {
    prevClicks.current = clicks;
  }, [clicks]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleChange = useCallback((e) => setValue(e.target.value), []);

  const logValue = useCallback(() => console.log(`value is ${value}`), [value]);

  useEffect(() => {
    console.log('logValue is created');
  }, [logValue]);

  return (
    <div id="test">
      <h1>Clicks: {clicks}</h1>
      <p>Prev clicks {prevClicks.current}</p>
      <p>Renders {renders.current}</p>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <button onClick={logValue}>Log value</button>
      <div
        // @ts-expect-error
        ref={elemRef}
        style={{
          width: '300px',
          height: '200px',
          background: 'limegreen',
          margin: '20px',
        }}
      ></div>
    </div>
  );
};

export default RefsClicker;
