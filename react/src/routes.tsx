import { type RouteProps } from 'react-router-dom';
import Tree from 'components/Tree';
import { DataLoader, Clicker } from 'components/DataLoader/UserLoaderHooks';
import HookTimer from 'components/HookTimer';
import RefsClicker from 'components/RefsClicker';
import SignUpForm from 'components/forms/SignUpForm';
import { lazy } from 'react';

export const HomePage = lazy(() => import('pages/HomePage'));
export const UserPage = lazy(() => import('pages/UserPage'));
export const UsersPage = lazy(() => import('pages/UsersPage'));
export const PostsPage = lazy(() => import('pages/PostsPage'));
export const LoginPage = lazy(() => import('pages/LoginPage'));
export const CounterPage = lazy(() => import('pages/CounterPage'));
export const TabContainer = lazy(() => import('pages/TabContainer'));

export const PAGES = [
  { path: '/', element: <HomePage /* throws */ /> },
  { path: '/users', element: <UsersPage /> },
  { path: '/posts', element: <PostsPage /> },
  { path: '/user', element: <UserPage /> },
  { path: '/tree', element: <Tree /> },
  { path: '/timer', element: <HookTimer /> },
  { path: '/clickerhooks', element: <Clicker /> },
  { path: '/datahooks', element: <DataLoader /> },
  { path: '/clickerrefs', element: <RefsClicker /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpForm /> },
  { path: '/counter', element: <CounterPage /> },
  { path: '/transition', element: <TabContainer /> },
] satisfies RouteProps[];
