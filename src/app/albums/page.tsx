import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from 'api/fetch';
import { Loading } from 'components';
import type { AlbumEntry } from 'api/types';
import styles from './page.module.scss';

const AlbumsListEntries: FC<{ albums: Promise<AlbumEntry[]> }> = ({
  albums,
}) => {
  const usableAlbums = use(albums);
  return (
    <ul className={styles.albumsList}>
      {usableAlbums.map(({ id, title, userId }) => (
        <li className={styles.albumsListItem} key={id}>
          <h1 className={styles.albumsListTitle}>{title}</h1>
        </li>
      ))}
    </ul>
  );
};

const AlbumsList = function () {
  const albums = getFromJsonPlaceholder<AlbumEntry[]>(
    JSONPLACEHOLDER_RESOURCES.ALBUMS,
  );

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <AlbumsListEntries albums={albums} />
      </Suspense>
    </main>
  );
};

export default AlbumsList;
