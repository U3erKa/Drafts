import { JSONPLACEHOLDER_RESOURCES, PhotosEntries } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Link } from 'react-router-dom';

export default function PhotosList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.PHOTOS);

  const mapList = data.map(({ albumId, id, title, url, thumbnailUrl }: PhotosEntries) => (
    <li key={id}>
      <h1>{title}</h1>
      <img src={url} alt={title}></img>
      <img src={thumbnailUrl} alt={title}></img>
      <p>Id: {albumId}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      <ul>{mapList}</ul>
    </main>
  );
}
