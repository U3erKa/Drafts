import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { AlbumEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import styles from './AlbumsList.module.scss';

const AlbumsList: FC = function () {
  const data = useLoader<AlbumEntry>(JSONPLACEHOLDER_RESOURCES.ALBUMS);

  const mapList = data.map(({ id, title, userId }) => (
    <li className={styles.albumsListItem} key={id}>
      <Link className={styles.albumsListLink} to="/users">
        <h1 className={styles.albumsListTitle}>{title}</h1>
      </Link>
    </li>
  ));

  return (
    <main>
      <Link to="/">Home</Link>
      <ul className={styles.albumsList}>{mapList}</ul>
    </main>
  );
};

export default AlbumsList;
