import { Link } from 'react-router-dom';

import { routes } from 'App';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {routes.map((route, i) => {
            if (route.path === '*') {
              return null;
            }

            return (
              <li key={i}>
                <Link to={route.path!}>{route.description}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
