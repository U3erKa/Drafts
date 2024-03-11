import { PAGES } from 'routes';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const HomePage = memo(function HomePage(props: { throws?: boolean }) {
  if (props.throws) throw new Error('Uh oh...');
  return (
    <div>
      Home
      {PAGES.map(({ path }) => (
        <div key={path}>
          <Link to={path}>Go to {path}</Link>
        </div>
      ))}
    </div>
  );
});

export default HomePage;
