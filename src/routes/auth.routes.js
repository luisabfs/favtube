import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../pages/Onboarding';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name="Onboarding" component={Onboarding} />
  </Auth.Navigator>
);

export default AuthRoutes;
