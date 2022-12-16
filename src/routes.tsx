import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import AccessDenied from './pages/AccessDenied';
import Error404 from './pages/Error404';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoutes, { LoggedRoute } from './PrivateRoutes';

const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Friends = lazy(() => import('./pages/Friends'));
const Photos = lazy(() => import('./pages/Photos'));
const Videos = lazy(() => import('./pages/Videos'));
const Settings = lazy(() => import('./pages/Settings'));

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <LoggedRoute component={<Login />} />,
  },
  {
    path: '/register',
    element: <LoggedRoute component={<Register />} />,
  },
  {
    path: '/error-404',
    element: <Error404 />,
  },
  {
    path: '/accessdenied',
    element: <AccessDenied />,
  },
  {
    path: '/',
    element: (
      <PrivateRoutes component={<HomeLayout />} roles={['user', 'admin']} />
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/friends',
        element: <Friends />,
      },
      {
        path: '/friends/:tab',
        element: <Friends />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
