'use client';
import { FC } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { Loading } from 'components';
import { useLoader } from 'hooks/useLoader';
import type { PostEntry } from 'api/types';

const PostsListEntries: FC<{ posts: PostEntry[] }> = ({ posts }) => {
  const postsList = posts.map(({ userId, id, title, body }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>User ID: {userId}</p>
      <p>{body}</p>
    </li>
  ));

  return <ul>{postsList}</ul>;
};

const PostsList: FC = function () {
  const {
    data: posts,
    error,
    isLoading,
  } = useLoader<PostEntry>(JSONPLACEHOLDER_RESOURCES.POSTS);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <PostsListEntries posts={posts} />}
    </main>
  );
};

export default PostsList;
