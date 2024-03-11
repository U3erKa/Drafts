import { getData, getUsers } from 'api';
import DataLoader from 'components/class/DataLoader';

const PostsPage = () => {
  const renderPosts = (loaderState) => {
    return (
      <ul>
        <li>
          <pre>{JSON.stringify(loaderState.data, undefined, 4)}</pre>
        </li>
      </ul>
    );
  };

  return (
    <main>
      <h1>Posts</h1>
      <DataLoader loadData={() => getData('posts')} render={renderPosts} />
      <DataLoader loadData={() => getUsers({ page: 5 })} render={renderPosts} />
    </main>
  );
};

export default PostsPage;
