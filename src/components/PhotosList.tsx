import { JSONPLACEHOLDER_RESOURCES, PhotosEntries } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';

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
  return <ul>{mapList}</ul>;
}
