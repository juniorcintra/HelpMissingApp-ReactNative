import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const Splash = () => {
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
