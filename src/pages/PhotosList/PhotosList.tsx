import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { PhotoEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import Loading from 'components/Loading/Loading';

const PhotosList: FC = function () {
  const { data: photos, error, isLoading } = useLoader<PhotoEntry>(JSONPLACEHOLDER_RESOURCES.PHOTOS);

  const mapList = photos.map(({ albumId, id, title, url, thumbnailUrl }) => (
    <li key={id}>
      <h1>{title}</h1>
      <a href={url}>
        <img src={thumbnailUrl} alt={title}></img>
      </a>
      <p>Id: {albumId}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <ul>{mapList}</ul>}
    </main>
  );
};

export default PhotosList;
