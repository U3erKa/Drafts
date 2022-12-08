import { JSONPLACEHOLDER_RESOURCES, CommentsEntries } from 'api/fetch';
import { useLoader } from 'hooks/dataLoader';

export default function CommentsList(props: {}) {
  const data = useLoader(JSONPLACEHOLDER_RESOURCES.COMMENTS);

  const mapList = data.map(({ postId, id, name, email, body }: CommentsEntries) => (
    <li key={id}>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{body}</p>
      <p>ID: {postId}</p>
    </li>
  ));
  return <ul>{mapList}</ul>;
}
