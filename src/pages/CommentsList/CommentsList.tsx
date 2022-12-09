import { JSONPLACEHOLDER_RESOURCES, CommentsEntries } from 'api/fetch';
import { useLoader } from 'hooks/useLoader';
import { Link } from 'react-router-dom';

export default function CommentsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  const mapList = data.map(({ postId, id, name, email, body }: CommentsEntries) => (
    <li key={id}>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <p>{body}</p>
      <p>Post ID: {postId}</p>
    </li>
  ));
  return (
    <main>
      <Link to="/">Home</Link>
      <ul>{mapList}</ul>
    </main>
  );
}
