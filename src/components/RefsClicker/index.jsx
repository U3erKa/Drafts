import { useClickerRef } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';

export const RefsClicker = (props) => {
  const elemRef = useRef();
  const clicks = useClickerRef(elemRef);
  const inputRef = useRef();
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

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="test">
      <h1>Clicks: {clicks}</h1>
      <p>Prev clicks {prevClicks.current}</p>
      <p>Renders {renders.current}</p>
      <input ref={inputRef} type="text" value={value} onChange={handleChange} />
      <div
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
