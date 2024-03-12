'use client';
import { FC } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Loading } from 'components';
import type { CommentEntry } from 'api/types';
import styles from './CommentsList.module.scss';

const CommentsListEntries: FC<{ comments: CommentEntry[] }> = ({ comments }) => {
  const commentsList = comments.map(({ postId, id, name, email, body }) => (
    <li className={styles.commentsListItem} key={id}>
      <h2 className={styles.commentsListName}>Name: {name}</h2>
      <a className={styles.commentsListEmail} href={`mailto:${email}`}>
        {email}
      </a>
      <p className={styles.commentsListBody}>{body}</p>
    </li>
  ));

  return <ul className={styles.commentsList}>{commentsList}</ul>;
};

const CommentsList: FC = function () {
  const { data: comments, error, isLoading } = useLoader<CommentEntry>(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  return (
    <main>
      <Link href="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <CommentsListEntries comments={comments} />}
    </main>
  );
};

export default CommentsList;
