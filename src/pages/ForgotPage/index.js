import React, { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, View } from 'react-native';

import Button from '../../components/Button';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const ForgotPage = ({ onPress }) => {
  const [emailUser, setEmailUser] = useState('');

  const handleRegister = async () => {
    onPress();
  };

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
              onChangeText={setEmailUser}
              value={emailUser}
              placeholder='email@example.com'
              keyboardType='email-address'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.divButtons}>
          <Button type='primary' title='Enviar' onPress={handleRegister} />
        </View>
        <View style={styles.divButtons}>
          <Button type='secondary' title='Voltar' onPress={() => onPress()} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgotPage;
