import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AlbumsList, CommentsList, Home, PhotosList, PostsList, TodoList, UsersList } from 'pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/comments" element={<CommentsList />} />
      <Route path="/albums" element={<AlbumsList />} />
      <Route path="/photos" element={<PhotosList />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
}

export default App;
