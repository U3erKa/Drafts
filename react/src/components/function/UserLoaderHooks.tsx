import { useClicker, useData } from 'hooks';
import * as API from 'api';

export const DataLoader = (props) => {
  const { data: users, isLoading, error } = useData(API.getData);

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
  const [clicks] = useClicker();

  return <div>{clicks}</div>;
};

export default DataLoader;
