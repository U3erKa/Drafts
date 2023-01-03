import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { TodoEntry } from 'api/types';
import { Loading } from 'components';
import { useLoader } from 'hooks/useLoader';

const TodoListEntries: FC<{ todos: TodoEntry[] }> = ({ todos }) => {
  const todosList = todos.map(({ userId, id, title, completed }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>userId: {userId}</p>
      <p>State: {!completed && 'not '}completed</p>
    </li>
  ));

  return <ul>{todosList}</ul>;
};

const TodoList: FC = function () {
  const { data: todos, error, isLoading } = useLoader<TodoEntry>(JSONPLACEHOLDER_RESOURCES.TODOS);

  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <TodoListEntries todos={todos} />}
    </main>
  );
};
export default TodoList;
