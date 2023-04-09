import React, { useState } from 'react';

export default function HomePage(props) {
  const [theme, setTheme] = useState();

  if (props.throws) throw new Error('Uh oh...');
  return <div>Home</div>;
}
