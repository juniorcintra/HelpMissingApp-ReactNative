import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './store/slices';
import thunk from 'redux-thunk';

import MainStack from './routes/MainStack';

const App = () => {
  const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: [thunk],
  });

  return (
    <ReduxProvider store={store}>
      <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default App;
