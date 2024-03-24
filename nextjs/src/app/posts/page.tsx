import { FC, Suspense, use } from 'react';
import Link from 'next/link';
import { JSONPLACEHOLDER_RESOURCES, getFromJsonPlaceholder } from '@/api/fetch';
import { Loading } from '@/components';
import type { PostEntry } from '@/api/types';

const PostsListEntries: FC<{ posts: Promise<PostEntry[]> }> = ({ posts }) => {
  const usablePosts = use(posts);
  return (
    <ul>
      {usablePosts.map(({ userId, id, title, body }) => (
        <li key={id}>
          <h1>{title}</h1>
          <p>User ID: {userId}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

const PostsList: FC = function () {
  const posts = getFromJsonPlaceholder<PostEntry[]>(
    JSONPLACEHOLDER_RESOURCES.POSTS,
  );

  return (
    <main>
      <Link href="/">Home</Link>
      <Suspense fallback={<Loading />}>
        <PostsListEntries posts={posts} />
      </Suspense>
    </main>
  );
};

export default PostsList;
