import { JSONPLACEHOLDER_RESOURCES, CommentsEntries } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Link } from 'react-router-dom';
import styles from './CommentsList.module.scss';

export default function CommentsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  const mapList = data.map(({ postId, id, name, email, body }: CommentsEntries) => (
    <li className={styles.commentsListItem} key={id}>
      <h2 className={styles.commentsListName}>Name: {name}</h2>
      <a className={styles.commentsListEmail} href={`mailto:${email}`}>
        {email}
      </a>
      <p className={styles.commentsListBody}>{body}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      <ul className={styles.commentsList}>{mapList}</ul>
    </main>
  );
}
