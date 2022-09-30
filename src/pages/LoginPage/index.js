import React, { useRef, useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useDispatch } from 'react-redux';

import { login } from '../../store/middleware';
import ForgotPage from '../ForgotPage';

import SignUpPage from '../SignUpPage';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const LoginPage = ({ navigation }) => {
  const viewPager = useRef(null);
  const dispatch = useDispatch();

  const [loginUser, setLoginUser] = useState('');
  const [senhaUser, setSenhaUser] = useState('');

  const handleLogin = async () => {
    const res = await dispatch(
      login({
        senha: senhaUser,
        login: loginUser,
      }),
    );

    if (res) {
      navigation.navigate('MainDrawer', { screen: 'Home' });
    }
  };

  return (
    <PagerView style={styles.container} initialPage={1} scrollEnabled={false} ref={viewPager}>
      <View key='1'>
        <ForgotPage onPress={() => viewPager.current.setPage(1)} />
      </View>
      <View key='2'>
        <ImageBackground source={imageBG} resizeMode='cover' style={styles.image}>
          <View style={styles.divLogo}>
            <Image source={imageLogo} style={styles.logo} />
            <Text style={styles.title}>Help Missing!</Text>
          </View>
          <View style={styles.divInputs}>
            <View style={styles.divInput}>
              <Text style={styles.label}>Login</Text>
              <TextInput
                onChangeText={setLoginUser}
                value={loginUser}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                style={styles.input}
              />
            </View>
            <View style={styles.divInput}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                onChangeText={setSenhaUser}
                value={senhaUser}
                secureTextEntry={true}
                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.divForgot}>
            <Text style={styles.labelForgot}>Esqueceu sua senha?</Text>
            <TouchableOpacity style={styles.buttonTransparent} onPress={() => viewPager.current.setPage(0)}>
              <Text style={styles.textbuttonTransparent}>Clique aqui</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.divButtons}>
            <TouchableOpacity style={styles.buttonPrimary} onPress={() => handleLogin()}>
              <Text style={styles.textButtonPrimary}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecundary} onPress={() => viewPager.current.setPage(2)}>
              <Text style={styles.textButtonSecundary}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <View key='3'>
        <SignUpPage onPress={() => viewPager.current.setPage(1)} />
      </View>
    </PagerView>
  );
};

export default LoginPage;
