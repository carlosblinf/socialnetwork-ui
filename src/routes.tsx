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
const FriendsPage = lazy(() => import('./pages/FriendsPage'));
const PhotosPage = lazy(() => import('./pages/PhotosPage'));
const VideosPage = lazy(() => import('./pages/VideosPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

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
        element: <FriendsPage />,
      },
      {
        path: '/photos',
        element: <PhotosPage />,
      },
      {
        path: '/videos',
        element: <VideosPage />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
