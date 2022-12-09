import { JSONPLACEHOLDER_RESOURCES, UsersEntries } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Link } from 'react-router-dom';

export default function TodoList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.USERS);

  const mapList = data.map(
    ({
      id,
      name,
      username,
      email,
      address: { street, suite, city, zipcode, geo },
      phone,
      website,
      company: { name: companyName, catchPhrase, bs },
    }: UsersEntries) => (
      <li key={id}>
        <h1>{name}</h1>
        <p>{username}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
        <section>
          <p>{street}</p>
          <p>{suite}</p>
          <p>{city}</p>
          <p>{zipcode}</p>
          <p>
            Coords: {geo.lat} {geo.lng}
          </p>
        </section>
        <section>
          <h2>{companyName}</h2>
          <p>{catchPhrase}</p>
          <p>{bs}</p>
        </section>
      </li>
    )
  );
  return (
    <main>
      <Link to="/">Home</Link>
      <ul>{mapList}</ul>;
    </main>
  );
}
