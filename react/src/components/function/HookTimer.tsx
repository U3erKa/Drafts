import { useState, useEffect, ChangeEvent, useRef } from 'react';

export default function HookTimer() {
  const [startingNumber, setStartingNumber] = useState(10);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef<any>(null);

  useEffect(() => stop, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setStartingNumber(+value);
  }

  function start() {
    if (isStarted) return;
    setIsStarted(true);
    setCurrentNumber(startingNumber);
    intervalRef.current = setInterval(tick, 1000);
  }

  function stop() {
    clearInterval(intervalRef.current);
    setIsStarted(false);
  }

  function tick() {
    setCurrentNumber((oldCurrentNumber) => oldCurrentNumber - 1);
  }

  return (
    <div>
      <p>Starting number: {startingNumber}</p>
      <p>Current number: {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
