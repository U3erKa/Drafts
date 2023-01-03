import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { CommentEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import styles from './CommentsList.module.scss';

const CommentsList: FC = function () {
  const data = useLoader<CommentEntry>(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  const mapList = data.map(({ postId, id, name, email, body }) => (
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
};

export default CommentsList;
