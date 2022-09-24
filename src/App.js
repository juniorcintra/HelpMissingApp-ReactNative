import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainStack from './routes/MainStack';

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
};

export default App;
