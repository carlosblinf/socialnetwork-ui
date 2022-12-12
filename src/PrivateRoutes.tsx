import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from './contex/AuthContext';

type PrivateRoutesProps = {
  component: React.ReactElement;
  roles: Array<any>;
};

type LoggedRouteProps = {
  component: React.ReactElement;
};

function PrivateRoutes({ component, roles }: PrivateRoutesProps) {
  const { authUser, isLogin } = useAuth();

  const userHasRequiredRole = roles.includes(authUser?.role);

  if (!authUser?.id || !isLogin) {
    return <Navigate replace to="/login" />;
  }
  if (!userHasRequiredRole) {
    return <Navigate to="/accessdenied" />;
  }

  return component;
}

export const LoggedRoute = ({ component }: LoggedRouteProps) => {
  const { authUser, isLogin } = useAuth();

  const userLogged = authUser?.id && isLogin;

  if (userLogged) return <Navigate replace to="/" />;

  return component;
};

export default PrivateRoutes;
