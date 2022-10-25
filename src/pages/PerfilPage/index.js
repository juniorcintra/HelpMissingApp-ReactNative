import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import styles from './styles';

const imageBG = require('../../../assets/images/background_perfil.png');
const imageAvatar = require('../../../assets/images/avatar.png');

const PerfilPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const [cpfUser, setCpfUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [contatoUser, setContatoUser] = useState('');
  const [photosSelected, setPhotosSelected] = useState('');

  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dateScroll = [
    { uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/01/exemples-sites-photod.jpg' },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/04/person-holding-iphone-instagram-open.jpg',
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/03/colorful-shirts-on-clothing-racks-indoors.jpg',
    },
    { uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/01/exemples-sites-photod.jpg' },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/04/person-holding-iphone-instagram-open.jpg',
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/03/colorful-shirts-on-clothing-racks-indoors.jpg',
    },
  ];

  const getUser = async () => {
    const asyncStrg = await AsyncStorage.getItem('user');
    const { user } = JSON.parse(asyncStrg);
    if (user) {
      setCpfUser(user?.cpf);
      setNameUser(user?.nome_completo);
      setEmailUser(user?.email);
      setLoginUser(user?.login);
      setContatoUser(user?.contato);
    }
  };

  const handleOpenModal = photo => {
    setPhotosSelected(photo);
    setShowModal(true);
  };

  useEffect(() => {
    getUser();
  }, [user]);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground source={imageBG} style={styles.header}>
            <Image source={imageAvatar} style={styles.headerAvatar} />
            <Text style={styles.headerTitle}>{loginUser}</Text>
          </ImageBackground>

          <View style={styles.divInput}>
            <Text style={styles.label}>Nome Completo</Text>
            <TextInput value={nameUser} editable={editable} style={styles.input} onChangeText={setNameUser} />
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
          {/* <View style={styles.divScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dateScroll.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => handleOpenModal(item.uri)}>
                  <Image source={{ uri: item.uri }} style={styles.photoScroll} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View> */}
        </View>
      </ScrollView>

      {/* Modal para visualizar foto */}
      <Modal show={showModal} setShowModal={setShowModal}>
        <View style={[styles.contentModal, { paddingBottom: 25 }]}>
          <Image source={{ uri: photosSelected }} style={styles.modalPhoto} />
          <Button title="Já foi encontrado!" />
        </View>
      </Modal>
    </>
  );
};

export default PerfilPage;
