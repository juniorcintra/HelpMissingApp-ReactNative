import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../pages/HomePage';

const { Navigator, Screen } = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={HomePage} options={{headerTitleAlign: 'center'}} />
    </Navigator>
  );
};

export default MainDrawer;
