import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from '@/api/fetch';
import { Loading } from '@/components';
import type { TodoEntry } from '@/api/types';

const TodoListEntries: FC<{ todos: Promise<TodoEntry[]> }> = ({ todos }) => {
  const usableTodos = use(todos);
  return (
    <ul>
      {usableTodos.map(({ userId, id, title, completed }) => (
        <li key={id}>
          <h1>{title}</h1>
          <p>userId: {userId}</p>
          <p>State: {!completed && 'not '}completed</p>
        </li>
      ))}
    </ul>
  );
};

const TodoList = function () {
  const todos = getFromJsonPlaceholder<TodoEntry[]>(
    JSONPLACEHOLDER_RESOURCES.TODOS,
  );

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <TodoListEntries todos={todos} />
      </Suspense>
    </main>
  );
};

export default TodoList;
