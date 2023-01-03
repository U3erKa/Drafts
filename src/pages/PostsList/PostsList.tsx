import { FC } from 'react';
import { Link } from 'react-router-dom';
import { JSONPLACEHOLDER_RESOURCES } from 'api/fetch';
import { PostEntry } from 'api/types';
import { useLoader } from 'hooks/useLoader';

const PostsList: FC = function () {
  const data = useLoader<PostEntry>(JSONPLACEHOLDER_RESOURCES.POSTS);

  const mapList = data.map(({ userId, id, title, body }) => (
    <li key={id}>
      <h1>{title}</h1>
      <p>User ID: {userId}</p>
      <p>{body}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      <ul>{mapList}</ul>
    </main>
  );
};

export default PostsList;
