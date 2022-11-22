import React from 'react';
import { getUsers } from '../../api';
import DataLoader from '../../components/DataLoader';

async function getPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await data.json();
}

const PostsPage = () => {
  const renderPosts = (loaderState) => {
    return (
      <ul>
        <li>
          <code>{JSON.stringify(loaderState.data, undefined, 4)}</code>
        </li>
      </ul>
    );
  };

  return (
    <main>
      <h1>Posts</h1>
      <DataLoader loadData={getPosts} render={renderPosts} />
      <DataLoader loadData={() => getUsers({ page: 5 })} render={() => {}} />
    </main>
  );
};

export default PostsPage;
