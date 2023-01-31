import { RouteObject } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Chat, Home, Login, NotFound, Register } from 'pages';

export const routes: (RouteObject & { description: string })[] = [
  { path: '/', element: <Home />, description: 'Home' },
  { path: '/login', element: <Login />, description: 'Login' },
  { path: '/register', element: <Register />, description: 'Register' },
  { path: '/chat', element: <Chat />, description: 'Chat' },
  { path: '*', element: <NotFound />, description: 'MissingNo' },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
