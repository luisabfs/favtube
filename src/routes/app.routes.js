import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const App = createStackNavigator();

const AppRoutes = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="Search" component={Search} />
    <App.Screen name="Favorites" component={Favorites} />
  </App.Navigator>
);

export default AppRoutes;
