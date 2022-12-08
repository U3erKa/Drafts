import { JSONPLACEHOLDER_RESOURCES, PostsEntries } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';

export default function PostsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.POSTS)

  const mapList = data.map(({ id, title, body }: PostsEntries) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  ));
  return <ul>{mapList}</ul>;
}
