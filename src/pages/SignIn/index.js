import React from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const SignIn = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode='cover' style={styles.image}>
        <View style={styles.divLogo}>
          <Image source={imageLogo} style={styles.logo} />
          <Text style={styles.title}>Help Missing!</Text>
        </View>
        <View style={styles.divInputs}>
          <View style={styles.divInput}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              onChangeText={() => {}}
              placeholder='email@example.com'
              keyboardType='email-address'
              placeholderTextColor={'#fff'}
              style={styles.input}
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              onChangeText={() => {}}
              secureTextEntry={true}
              placeholder='********'
              placeholderTextColor={'#fff'}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.divButtons}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.textButtonPrimary}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSecundary}>
            <Text style={styles.textButtonSecundary}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
