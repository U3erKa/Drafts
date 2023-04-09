import { memo, useState } from 'react';

const HomePage = memo(function HomePage(props: {throws?: boolean}) {
  const [theme, setTheme] = useState();

  if (props.throws) throw new Error('Uh oh...');
  return <div>Home</div>;
});

export default HomePage;
