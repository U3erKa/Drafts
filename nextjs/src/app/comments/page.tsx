import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from '@/api/fetch';
import { Loading } from '@/components';
import type { CommentEntry } from '@/api/types';
import styles from './page.module.scss';

const CommentsListEntries: FC<{ comments: Promise<CommentEntry[]> }> = ({ comments }) => {
  const usableComments = use(comments);
  return (
    <ul className={styles.commentsList}>
      {usableComments.map(({ postId, id, name, email, body }) => (
        <li className={styles.commentsListItem} key={id}>
          <h2 className={styles.commentsListName}>Name: {name}</h2>
          <a className={styles.commentsListEmail} href={`mailto:${email}`}>
            {email}
          </a>
          <p className={styles.commentsListBody}>{body}</p>
        </li>
      ))}
    </ul>
  );
};

const CommentsList = function () {
  const comments = getFromJsonPlaceholder<CommentEntry[]>(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <CommentsListEntries comments={comments} />
      </Suspense>
    </main>
  );
};

export default CommentsList;
