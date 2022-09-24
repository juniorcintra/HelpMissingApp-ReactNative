import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/LoginPage';
import Splash from '../pages/Splash';
import MainDrawer from './MainDrawer';
import SignUpPage from '../pages/SignUpPage';

const { Navigator, Screen } = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Login' component={LoginPage} />
      <Screen name='SignUp' component={SignUpPage} />
      <Screen name='Splash' component={Splash} />
      <Screen name='MainDrawer' component={MainDrawer} />
    </Navigator>
  );
};

export default MainStack;
