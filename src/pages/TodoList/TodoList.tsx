import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { TodoEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import Loading from 'components/Loading/Loading';

const TodoList: FC = function () {
  const { data: todos, error, isLoading } = useLoader<TodoEntry>(JSONPLACEHOLDER_RESOURCES.TODOS);

  const todosList = todos.map(({ userId, id, title, completed }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>userId: {userId}</p>
      <p>State: {!completed && 'not '}completed</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <ul>{todosList}</ul>}
    </main>
  );
};
export default TodoList;
