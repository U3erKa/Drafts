import { routes } from 'App';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Home: FC = function () {
  return (
    <header>
      <nav>
        <ul>
          {routes.map(({ id, name, path }) => (
            <li key={id}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Home;
