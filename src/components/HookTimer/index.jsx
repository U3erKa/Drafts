import React, { useState } from 'react';

export default function HookTimer() {
  const [startingNumber, setStartingNumber] = useState(0);
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
