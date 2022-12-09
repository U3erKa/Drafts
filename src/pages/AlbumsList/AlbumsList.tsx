import { AlbumsEntries, JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Link } from 'react-router-dom';
import styles from './AlbumsList.module.scss';

export default function AlbumsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.ALBUMS);

  const mapList = data.map(({ id, title, userId }: AlbumsEntries) => (
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
}
