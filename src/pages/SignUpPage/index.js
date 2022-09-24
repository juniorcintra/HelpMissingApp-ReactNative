import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from './styles';

const imageBG = require('../../../assets/images/background_login.jpg');
const imageLogo = require('../../../assets/images/logo_help.png');

const SignUpPage = ({ onPress }) => {
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
              onChangeText={() => {}}
              placeholder='Joao Paulo da Silva'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              onChangeText={() => {}}
              placeholder='xxx.xxx.xxx-xx'
              keyboardType='number-pad'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
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
            <Text style={styles.label}>Contato</Text>
            <TextInput
              onChangeText={() => {}}
              placeholder='(xx) xxxxx-xxxx'
              keyboardType='number-pad'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>Login</Text>
            <TextInput
              onChangeText={() => {}}
              placeholder='joao.silva'
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
          <View style={[styles.divInput, styles.lastInput]}>
            <Text style={styles.label}>Confirmar senha</Text>
            <TextInput
              onChangeText={() => {}}
              secureTextEntry={true}
              placeholder='********'
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
              style={styles.input}
            />
          </View>
        </ScrollView>
        <View style={styles.divButtons}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
            <Text style={styles.textButtonPrimary}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpPage;
