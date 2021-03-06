import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';

const Routes = () => {
  const { user } = useAuth();

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
