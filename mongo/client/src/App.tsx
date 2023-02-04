import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Chat, Home, Login, NotFound, Register } from 'pages';
import { REFRESH_TOKEN } from './constants';
import { refresh } from 'redux/user.slice';
import type { RouteObject } from 'react-router-dom';

export const routes: (RouteObject & { description: string })[] = [
  { path: '/', element: <Home />, description: 'Home' },
  { path: '/login', element: <Login />, description: 'Login' },
  { path: '/register', element: <Register />, description: 'Register' },
  { path: '/chat', element: <Chat />, description: 'Chat' },
  { path: '*', element: <NotFound />, description: 'MissingNo' },
];

const router = createBrowserRouter(routes);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem(REFRESH_TOKEN);

    if (token) {
      // @ts-ignore
      dispatch(refresh(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
