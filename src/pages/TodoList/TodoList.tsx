import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { TodoEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';

const TodoList: FC = function () {
  const data = useLoader<TodoEntry>(JSONPLACEHOLDER_RESOURCES.TODOS);

  const mapList = data.map(({ userId, id, title, completed }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>userId: {userId}</p>
      <p>State: {!completed && 'not '}completed</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      <ul>{mapList}</ul>
    </main>
  );
};
export default TodoList;
