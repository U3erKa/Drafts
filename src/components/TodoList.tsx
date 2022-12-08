import { JSONPLACEHOLDER_RESOURCES, TodoEntries } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';

export default function TodoList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.TODOS);

  const mapList = data.map(({ userId, id, title, completed }: TodoEntries) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>userId: {userId}</p>
      <p>State: {completed ? '' : 'not '}completed</p>
    </li>
  ));
  return <ul>{mapList}</ul>;
}
