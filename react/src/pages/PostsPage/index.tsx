import DataLoader from 'components/class/DataLoader';
import { JSONPLACEHOLDER_RESOURCES } from 'const';
import { useJSONPlaceholderData } from 'hooks/query';

const PostsPage = () => {
  const { data } = useJSONPlaceholderData<any[]>(JSONPLACEHOLDER_RESOURCES.POSTS);
  const renderPosts = (loaderState) => {
    return (
      <ul>
        <li>
          <pre>{JSON.stringify(loaderState.data, undefined, 4)}</pre>
        </li>
      </ul>
    );
  };

  if (!data) return <div>Loading...</div>;
  return (
    <main>
      <h1>Posts</h1>
      <DataLoader loadData={() => Promise.resolve(data)} render={renderPosts} />
    </main>
  );
};

export default PostsPage;
