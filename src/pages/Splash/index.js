import React, { useEffect } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/user.slice';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const Splash = ({ navigation }) => {
  const dispatch = useDispatch();
  const getUser = async () => {
    const asyncStrg = await AsyncStorage.getItem('user');
    const data = JSON.parse(asyncStrg);
    if (data !== null) {
      await dispatch(setUser(data?.user));
      setTimeout(() => {
        navigation.navigate('MainDrawer', { screen: 'Home' });
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode='cover' style={styles.image}>
        <View style={styles.divLogo}>
          <Image source={imageLogo} style={styles.logo} />
          <Text style={styles.title}>Help Missing!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
