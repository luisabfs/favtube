import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Onboarding from './pages/Onboarding';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#000" />
    <Onboarding />
  </NavigationContainer>
);

export default App;
