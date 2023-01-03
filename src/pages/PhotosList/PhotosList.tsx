import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { PhotoEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';

const PhotosList: FC = function () {
  const data = useLoader<PhotoEntry>(JSONPLACEHOLDER_RESOURCES.PHOTOS);

  const mapList = data.map(({ albumId, id, title, url, thumbnailUrl }) => (
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
      <ul>{mapList}</ul>
    </main>
  );
};

export default PhotosList;
