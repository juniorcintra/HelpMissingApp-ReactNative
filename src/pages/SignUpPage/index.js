import React, { useState } from 'react';
import { Alert, Image, ImageBackground, Keyboard, ScrollView, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import Loading from '../../components/loading';
import { registerUser } from '../../store/middleware';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const SignUpPage = ({ onPress }) => {
  const [nameUser, setNameUser] = useState('');
  const [cpfUser, setCpfUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [contatoUser, setContatoUser] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [senhaUser, setSenhaUser] = useState('');
  const [senha2User, setSenha2User] = useState('');

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);

  const handleRegister = async () => {
    Keyboard.dismiss();

    if (
      nameUser === '' ||
      cpfUser === '' ||
      emailUser === '' ||
      contatoUser === '' ||
      loginUser === '' ||
      senhaUser === ''
    ) {
      Alert.alert('Erro!', 'Preencha os campos!');
      return;
    }

    await dispatch(
      registerUser({
        nome_completo: nameUser,
        cpf: cpfUser,
        contato: contatoUser,
        senha: senhaUser,
        senha2: senha2User,
        email: emailUser,
        login: loginUser,
      }),
    );
    onPress();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} resizeMode='cover' style={styles.image}>
        <View style={styles.divLogo}>
          <Image source={imageLogo} style={styles.logo} />
          <Text style={styles.title}>Help Missing!</Text>
        </View>
        <ScrollView style={styles.divInputs} showsVerticalScrollIndicator={false}>
          <View style={styles.divInput}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
              onChangeText={setNameUser}
              value={nameUser}
              placeholder='Joao Paulo da Silva'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              onChangeText={setCpfUser}
              value={cpfUser}
              placeholder='xxx.xxx.xxx-xx'
              keyboardType='number-pad'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
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
          <View style={styles.divInput}>
            <Text style={styles.label}>Contato</Text>
            <TextInput
              onChangeText={setContatoUser}
              value={contatoUser}
              placeholder='(xx) xxxxx-xxxx'
              keyboardType='number-pad'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>Login</Text>
            <TextInput
              onChangeText={setLoginUser}
              value={loginUser}
              placeholder='joao.silva'
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
              placeholder='********'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
          <View style={[styles.divInput, styles.lastInput]}>
            <Text style={styles.label}>Confirmar senha</Text>
            <TextInput
              onChangeText={setSenha2User}
              value={senha2User}
              secureTextEntry={true}
              placeholder='********'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
        </ScrollView>
        <View style={styles.divButtons}>
          <Button type='primary' title='Cadastrar' onPress={handleRegister} />
        </View>
        <View style={styles.divButtons}>
          <Button type='secondary' title='Voltar' onPress={() => onPress()} />
        </View>
        <Loading show={loading} />
      </ImageBackground>
    </View>
  );
};

export default SignUpPage;
