import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import HookTimer from 'components/function/HookTimer';
import RefsClicker from 'components/function/RefsClicker';
import SignUpForm from 'components/forms/SignUpForm';
import { lazy } from 'react';

export const HomePage = lazy(() => import('pages/HomePage'));
export const LoginPage = lazy(() => import('pages/LoginPage'));
export const TabContainer = lazy(() => import('pages/TabContainer'));
export const MoreCounters = lazy(() => import('pages/MoreCounters'));
export const MobxPage = lazy(() => import('pages/MobxPage'));

export const PAGES = [
  { path: '/', element: <HomePage /* throws */ /> },
  { path: '/timer', element: <HookTimer /> },
  { path: '/clickerrefs', element: <RefsClicker /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignUpForm /> },
  { path: '/transition', element: <TabContainer /> },
  { path: '/more-counters', element: <MoreCounters /> },
  { path: '/mobx', element: <MobxPage /> },
] satisfies RouteObject[];

export const router = createBrowserRouter(PAGES);
