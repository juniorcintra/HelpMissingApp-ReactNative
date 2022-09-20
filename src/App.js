import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from './routes/MainStack';
import SignIn from './pages/SignIn';
import Splash from './pages/Splash';

const App = () => {
  const [loggedUser, setLoggedUser] = useState(false);
  const [splashScreen, setSplashScreen] = useState(true);
  const getUser = async () => {
    const asyncStrg = await AsyncStorage.getItem('user');
    const data = JSON.parse(asyncStrg);
    if (data?.user !== null) {
      setLoggedUser(data?.user);
    }
  };

  setTimeout(() => {
    setSplashScreen(false);
  }, 3000);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor={'transparent'} />
      <NavigationContainer>{splashScreen ? <Splash /> : loggedUser ? <MainStack /> : <SignIn />}</NavigationContainer>
    </>
  );
};

export default App;
