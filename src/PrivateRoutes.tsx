import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRoutesProps = {
  component: React.ReactElement;
  roles: Array<any>;
};

function PrivateRoutes({ component, roles }: PrivateRoutesProps) {
  const currentUser = {
    id: 1,
    role: 'user',
  };
  const userHasRequiredRole = roles.includes(currentUser?.role);

  if (!currentUser?.id) {
    return <Navigate to="/login" />;
  }
  if (!userHasRequiredRole) {
    return <Navigate to="/accessdenied" />;
  }

  return component;
}

export default PrivateRoutes;
