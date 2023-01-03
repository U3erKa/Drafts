import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { PostEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';
import Loading from 'components/Loading/Loading';

const PostsList: FC = function () {
  const { data: posts, error, isLoading } = useLoader<PostEntry>(JSONPLACEHOLDER_RESOURCES.POSTS);

  const postsList = posts.map(({ userId, id, title, body }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>User ID: {userId}</p>
      <p>{body}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      {isLoading && <Loading />}
      {error?.message ?? <ul>{postsList}</ul>}
    </main>
  );
};

export default PostsList;
