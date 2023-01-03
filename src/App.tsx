import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AlbumsList, CommentsList, Home, PhotosList, PostsList, TodoList, UsersList } from 'pages';

export const routes = [
  { id: 0, path: '/', name: 'Home', element: <Home /> },
  { id: 1, path: '/posts', name: 'Posts', element: <PostsList /> },
  { id: 2, path: '/comments', name: 'Comments', element: <CommentsList /> },
  { id: 3, path: '/albums', name: 'Albums', element: <AlbumsList /> },
  { id: 4, path: '/photos', name: 'Photos', element: <PhotosList /> },
  { id: 5, path: '/todo', name: 'Todo', element: <TodoList /> },
  { id: 6, path: '/users', name: 'Users', element: <UsersList /> },
];

const App: FC = function () {
  return (
    <Routes>
      {routes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default App;
