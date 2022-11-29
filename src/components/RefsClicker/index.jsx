import { useClickerRef } from 'hooks';
import React, { useRef } from 'react';

export default function RefsClicker() {
  const myRef = useRef(null);
  const [click] = useClickerRef(myRef);

  return <div ref={myRef}>{click}</div>;
}
