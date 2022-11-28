import React from 'react';
import { useClicker, useData } from 'hooks';
import * as API from 'api';

export const DataLoader = (props) => {
  const { data: users, isLoading, error } = useData(API.getOtherusers());

  const userList = users.map(({ name, email, id }) => (
    <article key={id}>
      <h2>{name}</h2>
      <p>
        <a href={`${email}`}>{email}</a>
      </p>
    </article>
  ));

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {error && <div>Error</div>}
      {users.length > 0 && userList}
    </div>
  );
};

export const Clicker = (props) => {
  const [clicks, setClicks] = useClicker(0);

  return <div>{clicks}</div>;
};

export default DataLoader;
