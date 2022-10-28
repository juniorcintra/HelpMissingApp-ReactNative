import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import styles from './styles';
import { colors } from '../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { setMissingPerson } from '../../store/slices/missingPerson.slice';

const imageBG = require('../../../assets/images/background_perfil.png');
const imageAvatar = require('../../../assets/images/avatar.png');

const PerfilPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  const [cpfUser, setCpfUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [contatoUser, setContatoUser] = useState('');
  const [photosSelected, setPhotosSelected] = useState('');
  const [missingPerson, setMissingPerson] = useState({});
  
  const [showModal, setShowModal] = useState(false);

  const dateScroll = [
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/01/exemples-sites-photod.jpg',
      encontrado: 0,
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/04/person-holding-iphone-instagram-open.jpg',
      encontrado: 1,
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/03/colorful-shirts-on-clothing-racks-indoors.jpg',
      encontrado: 1,
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2021/01/exemples-sites-photod.jpg',
      encontrado: 0,
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/04/person-holding-iphone-instagram-open.jpg',
      encontrado: 1,
    },
    {
      uri: 'https://wpblog.zyro.com/cdn-cgi/image/w=1200,q=85/wp-content/uploads/2022/03/colorful-shirts-on-clothing-racks-indoors.jpg',
      encontrado: 1,
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

  const handleOpenModal = person => {
    setPhotosSelected(person.uri);
    setMissingPerson(person);
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
            <TextInput value={nameUser} editable={false} style={styles.input} onChangeText={setNameUser} />
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
              editable={false}
              style={styles.input}
              onChangeText={setEmailUser}
              keyboardType='email-address'
            />
          </View>
          <View style={styles.divInput}>
            <Text style={styles.label}>Contato</Text>
            <TextInput
              editable={false}
              value={contatoUser}
              style={styles.input}
              keyboardType='number-pad'
              onChangeText={setContatoUser}
            />
          </View>
          {/* <View style={styles.divScroll}>
            <Text style={[styles.label, { marginBottom: 12 }]}>Desaparecidos cadastrados:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dateScroll.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  onPress={() => handleOpenModal(item)}
                  style={{ position: 'relative' }}>
                  <Image source={{ uri: item.uri }} style={[styles.photoScroll, { opacity: item.encontrado === 1 ? 0.6 : 1  }]} />
                  {item.encontrado === 1 && (
                    <Icon
                      name='done'
                      color={colors.sucess}
                      size={45}
                      style={{ position: 'absolute', bottom: 5, right: 5 }}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View> */}
        </View>
      </ScrollView>
      <Modal show={showModal} setShowModal={setShowModal}>
        <View style={[styles.contentModal, { paddingBottom: 25 }]}>
          <View style={{ position: 'relative', width: '100%', height: '60%', marginBottom: 25 }}>
            <Image source={{ uri: photosSelected }} style={[styles.modalPhoto, { opacity: missingPerson.encontrado === 1 ? 0.6 : 1 }]} />
            {missingPerson.encontrado === 1 && (
              <Icon name='done' color={colors.sucess} size={60} style={{ position: 'absolute', bottom: 5, right: 5 }} />
            )}
          </View>
          <Button title={missingPerson.encontrado === 1 ? 'Já foi encontrado!' : "Ainda desaparecido!"} />
          <Button
            title='Ver Informações'
            onPress={() => navigation.navigate('MissingDetail', { person: missingPerson })}
          />
        </View>
      </Modal>
    </>
  );
};

export default PerfilPage;
