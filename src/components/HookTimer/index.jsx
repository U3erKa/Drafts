import React, { useState, useEffect } from 'react';

export default function HookTimer() {
  const [startingNumber, setStartingNumber] = useState(10);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setStartingNumber(+value);
    // setState({ ...state, startingNumber: value });
  };
  const start = () => {
    if (!isStarted) {
      setIsStarted(true);
      setCurrentNumber(startingNumber);
      setIntervalId(setInterval(tick, 1000));
    }
  };
  const stop = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };
  const tick = () => {
    setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - 1);
  };

  useEffect(() => {
    console.log('useEffect');
    // const intervalId = setInterval(tick, 1000);

    return () => {
      console.log('cleanup');
      // clearInterval(intervalId);
    };
  });
  useEffect(() => {
    console.log(true);
    return () => {
      console.log('will unmount');
    };
  }, []);
  useEffect(() => {
    console.log(currentNumber);
  }, [currentNumber]);

  return (
    <>
      <p>Starting number: {startingNumber}</p>
      <p>Current number: {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}
