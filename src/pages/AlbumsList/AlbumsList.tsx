import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Loading } from 'components';
import type { AlbumEntry } from 'api/types';
import styles from './AlbumsList.module.scss';

const AlbumsListEntries: FC<{ albums: AlbumEntry[] }> = ({ albums }) => {
  const albumsList = albums.map(({ id, title, userId }) => (
    <li className={styles.albumsListItem} key={id}>
      <h1 className={styles.albumsListTitle}>{title}</h1>
    </li>
  ));

  return <ul className={styles.albumsList}>{albumsList}</ul>;
};

const AlbumsList: FC = function () {
  const { data: albums, error, isLoading } = useLoader<AlbumEntry>(JSONPLACEHOLDER_RESOURCES.ALBUMS);

  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <AlbumsListEntries albums={albums} />}
    </main>
  );
};

export default AlbumsList;
