import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { UserEntry } from 'api/types';
import { Loading } from 'components';
import { useLoader } from 'hooks/useLoader';

const UsersListEntries: FC<{ users: UserEntry[] }> = ({ users }) => {
  const usersList = users.map(
    ({
      id,
      name,
      username,
      email,
      address: { street, suite, city, zipcode, geo },
      phone,
      website,
      company: { name: companyName, catchPhrase, bs },
    }) => (
      <li key={id} id={id as any}>
        <section>
          <h1>Name: {name}</h1>
          <p>Username: {username}</p>
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Phone: <a href={`phone:${phone}`}>{phone}</a>
          </p>
          <p>
            Website: <a href={`http://${website}`}>{website}</a>
          </p>
        </section>
        <section>
          <p>City: {city}</p>
          <p>Street: {street}</p>
          <p>Suite: {suite}</p>
          <p>Zipcode: {zipcode}</p>
          <p>
            Coords: {geo.lat} {geo.lng}
          </p>
        </section>
        <section>
          <h2>Company: {companyName}</h2>
          <p>Catchphrase: {catchPhrase}</p>
          <p>BS: {bs}</p>
        </section>
      </li>
    )
  );

  return <ul>{usersList}</ul>;
};

const UsersList: FC = function () {
  const { data: users, error, isLoading } = useLoader<UserEntry>(JSONPLACEHOLDER_RESOURCES.USERS);

  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <UsersListEntries users={users} />}
    </main>
  );
};

export default UsersList;
