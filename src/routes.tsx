import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import AccessDenied from './pages/AccessDenied';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import PrivateRoutes from './PrivateRoutes';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
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
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/error-404" />,
  },
]);

export default routes;
