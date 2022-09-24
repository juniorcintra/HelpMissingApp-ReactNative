import React, { useRef } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import SignUpPage from '../SignUpPage';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const LoginPage = () => {
  const viewPager = useRef(null);

  return (
    <PagerView style={styles.container} initialPage={0} scrollEnabled={false} ref={viewPager}>
      <View key='1'>
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
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                style={styles.input}
              />
            </View>
            <View style={styles.divInput}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                onChangeText={() => {}}
                secureTextEntry={true}
                placeholder='********'
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.divForgot}>
            <Text style={styles.labelForgot}>Esqueceu sua senha?</Text>
            <TouchableOpacity style={styles.buttonTransparent}>
              <Text style={styles.textbuttonTransparent}>Clique aqui</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divButtons}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.textButtonPrimary}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecundary} onPress={() => viewPager.current.setPage(1)}>
              <Text style={styles.textButtonSecundary}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View key='2'>
        <SignUpPage onPress={() => viewPager.current.setPage(0)} />
      </View>
    </PagerView>
  );
};

export default LoginPage;
