import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { AlbumEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import styles from './AlbumsList.module.scss';
import Loading from 'components/Loading/Loading';

const AlbumsList: FC = function () {
  const { data: albums, error, isLoading } = useLoader<AlbumEntry>(JSONPLACEHOLDER_RESOURCES.ALBUMS);

  const albumsList = albums.map(({ id, title, userId }) => (
    <li className={styles.albumsListItem} key={id}>
      <Link className={styles.albumsListLink} to="/users">
        <h1 className={styles.albumsListTitle}>{title}</h1>
      </Link>
    </li>
  ));

  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <ul className={styles.albumsList}>{albumsList}</ul>}
    </main>
  );
};

export default AlbumsList;
