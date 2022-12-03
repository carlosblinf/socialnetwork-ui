import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
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
    path: '/',
    element: (
      <PrivateRoutes>
        <HomeLayout />
      </PrivateRoutes>
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
]);

export default routes;
