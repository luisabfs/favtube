import React from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const user = true;

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
