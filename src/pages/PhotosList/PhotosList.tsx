import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { Loading } from 'components';
import { useLoader } from 'hooks/useLoader';
import type { PhotoEntry } from 'api/types';

const PhotosListEntries: FC<{ photos: PhotoEntry[] }> = ({ photos }) => {
  const mapList = photos.map(({ albumId, id, title, url, thumbnailUrl }) => (
    <li key={id}>
      <h1>{title}</h1>
      <a href={url}>
        <img src={thumbnailUrl} alt={title}></img>
      </a>
      <p>Id: {albumId}</p>
    </li>
  ));

  return <ul>{mapList}</ul>;
};

const PhotosList: FC = function () {
  const { data: photos, error, isLoading } = useLoader<PhotoEntry>(JSONPLACEHOLDER_RESOURCES.PHOTOS);

  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <PhotosListEntries photos={photos} />}
    </main>
  );
};

export default PhotosList;
