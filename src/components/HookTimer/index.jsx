import React, { useState } from 'react';

export default function HookTimer() {
  const [startingNumber, setStartingNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  // const [state, setState] = useState({ count: 0, startingNumber: 0 });

  const handleChange = (e) => {
    const { target: { value } } = e;
    setStartingNumber(value);
    // setState({ ...state, startingNumber: value });
  };

  return (
    <>
      <p>Starting number: {startingNumber}</p>
      <p>Current number: {currentNumber}</p>
      <input type="text" value={startingNumber} onChange={handleChange} />
      <button>Start</button>
      <button>Stop</button>
    </>
  );
}
