import { AlbumsEntries, JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';

export default function AlbumsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.ALBUMS);

  const mapList = data.map(({ id, title, userId }: AlbumsEntries) => (
    <li key={id}>
      <h1>{title}</h1>
      <h2>User ID: {userId}</h2>
    </li>
  ));

  return <ul>{mapList}</ul>;
}
