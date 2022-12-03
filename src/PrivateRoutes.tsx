import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRoutesProps = {
  children: React.ReactElement;
};

function PrivateRoutes({ children }: PrivateRoutesProps) {
  const currentUser = true;

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoutes;
