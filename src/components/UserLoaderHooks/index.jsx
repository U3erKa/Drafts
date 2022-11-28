import React from 'react';
import { useData } from 'hooks';
import * as API from 'api';
// import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const DataLoader = (props) => {
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

export default DataLoader;
