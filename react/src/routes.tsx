import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

export const HomePage = lazy(() => import('pages/HomePage'));
export const LoginPage = lazy(() => import('pages/LoginPage'));
export const MobxPage = lazy(() => import('pages/MobxPage'));
export const RefsClicker = lazy(() => import('pages/RefsClicker'));
export const SignUpForm = lazy(() => import('components/forms/SignUpForm'));
export const TabContainer = lazy(() => import('pages/TabContainer'));

export const PAGES = [
  { path: '/', element: <HomePage /* throws */ /> },
  { path: '/clickerrefs', element: <RefsClicker /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/mobx', element: <MobxPage /> },
  { path: '/signup', element: <SignUpForm /> },
  { path: '/transition', element: <TabContainer /> },
] satisfies RouteObject[];
