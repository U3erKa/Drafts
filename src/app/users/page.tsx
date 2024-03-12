import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from 'api/fetch';
import { Loading } from 'components';
import type { Address, Company, UserEntry, UserInfoProps } from 'api/types';

const UserInfo: FC<UserInfoProps> = ({
  name,
  username,
  email,
  phone,
  website,
}) => (
  <section>
    <h1>Name: {name}</h1>
    <p>Username: {username}</p>
    <p>
      Email: <a href={`mailto:${email}`}>{email}</a>
    </p>
    <p>
      Phone: <a href={`tel:${phone}`}>{phone}</a>
    </p>
    <p>
      Website: <a href={`http://${website}`}>{website}</a>
    </p>
  </section>
);

const AddressInfo: FC<Address> = ({ street, suite, city, zipcode, geo }) => (
  <section>
    <p>City: {city}</p>
    <p>Street: {street}</p>
    <p>Suite: {suite}</p>
    <p>Zipcode: {zipcode}</p>
    <p>
      Coords: {geo.lat} {geo.lng}
    </p>
  </section>
);

const CompanyInfo: FC<Company> = ({ name: companyName, catchPhrase, bs }) => (
  <section>
    <h2>Company: {companyName}</h2>
    <p>Catchphrase: {catchPhrase}</p>
    <p>BS: {bs}</p>
  </section>
);

const UsersListEntries: FC<{ users: Promise<UserEntry[]> }> = ({ users }) => {
  const usableUsers = use(users);
  return (
    <ul className="flex flex-col gap-4">
      {usableUsers.map(({ id, address, company, ...userProps }) => (
        <li key={id} id={id as unknown as string}>
          <UserInfo {...userProps} />
          <AddressInfo {...address} />
          <CompanyInfo {...company} />
        </li>
      ))}
    </ul>
  );
};

const UsersList = function () {
  const users = getFromJsonPlaceholder<UserEntry[]>(
    JSONPLACEHOLDER_RESOURCES.USERS,
  );

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <UsersListEntries users={users} />
      </Suspense>
    </main>
  );
};

export default UsersList;
