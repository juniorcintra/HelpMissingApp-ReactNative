import React, { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

const imageBG = require('../../../assets/images/background_perfil.png');
const imageAvatar = require('../../../assets/images/avatar.png');

const PerfilPage = () => {
  const [cpfUser, setCpfUser] = useState('00000000000');
  const [nameUser, setNameUser] = useState('Junior Cintra');
  const [emailUser, setEmailUser] = useState('teste@teste.com');
  const [loginUser, setLoginUser] = useState('Junior.cintra');
  const [contatoUser, setContatoUser] = useState('24998413578');

  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  // console.log(user)

  return (
    <View style={styles.container}>
      <ImageBackground source={imageBG} style={styles.header}>
        <Image source={imageAvatar} style={styles.headerAvatar} />
        <Text style={styles.headerTitle}>{loginUser}</Text>
      </ImageBackground>

      <View style={styles.divInput}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          value={nameUser}
          editable={editable}
          style={styles.input}
          onChangeText={setNameUser}
        />
      </View>
      <View style={styles.divInput}>
        <Text style={styles.label}>CPF</Text>
        <TextInput
          value={cpfUser}
          editable={false}
          style={styles.input}
          keyboardType='number-pad'
          onChangeText={setCpfUser}
        />
      </View>
      <View style={styles.divInput}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          value={emailUser}
          editable={editable}
          style={styles.input}
          onChangeText={setEmailUser}
          keyboardType='email-address'
        />
      </View>
      <View style={styles.divInput}>
        <Text style={styles.label}>Contato</Text>
        <TextInput
          editable={editable}
          value={contatoUser}
          style={styles.input}
          keyboardType='number-pad'
          onChangeText={setContatoUser}
        />
      </View>
    </View>
  );
};

export default PerfilPage;
