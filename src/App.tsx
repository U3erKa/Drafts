import React from 'react';
import './App.css';
import PostsList from 'components/PostsList';
import CommentsList from 'components/CommentsList';
import AlbumsList from 'components/AlbumsList';
import PhotosList from 'components/PhotosList';
import TodoList from 'components/TodoList';
import UsersList from 'components/UsersList';

function App() {
  return (
    <div className="App">
      {/* <PostsList /> */}
      {/* <CommentsList /> */}
      {/* <AlbumsList /> */}
      {/* <PhotosList /> */}
      {/* <TodoList /> */}
      <UsersList />
    </div>
  );
}

export default App;
