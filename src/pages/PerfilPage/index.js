import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/Modal';
import Button from '../../components/Button';

import styles from './styles';
import { colors } from '../../styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getMissingPersonsPerUser, setMissingPersonFound } from '../../store/middleware/missingPerson.middleware';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const imageBG = require('../../../assets/images/background_perfil.png');
const imageAvatar = require('../../../assets/images/avatar.png');

const PerfilPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);
  const { missingPersonsUser } = useSelector(state => state.missingPersonReducer);

  const [cpfUser, setCpfUser] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [contatoUser, setContatoUser] = useState('');
  const [photosSelected, setPhotosSelected] = useState('');
  const [missingPerson, setMissingPerson] = useState({});

  const [showModal, setShowModal] = useState(false);

  const getUser = async () => {
    if (user) {
      setCpfUser(user?.cpf);
      setNameUser(user?.nome_completo);
      setEmailUser(user?.email);
      setLoginUser(user?.login);
      setContatoUser(user?.contato);
    }
  };

  const handleOpenModal = person => {
    setPhotosSelected(person?.pessoas_desaparecidas_anexos[0]?.conteudo);
    setMissingPerson(person);
    setShowModal(true);
  };

  useEffect(() => {
    getUser();
  }, []);

  async function handleSetEncontrado() {
    const body = {
      pessoas_desaparecidas_id: missingPerson.id,
      encontrado: 1,
    };
    await dispatch(setMissingPersonFound(body));

    setPhotosSelected('');
    setMissingPerson({});
    setShowModal(false);

    handleGetMissingPersonsPerUser();
  }

  const handleGetMissingPersonsPerUser = async () => {
    await dispatch(getMissingPersonsPerUser(`?usuarios_id=${user?.id}`));
  };

  useFocusEffect(
    useCallback(() => {
      handleGetMissingPersonsPerUser();
    }, []),
  );

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
          <View style={styles.divScroll}>
            <Text style={[styles.label, { marginBottom: 12 }]}>Desaparecidos cadastrados:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {missingPersonsUser.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.6}
                  onPress={() => handleOpenModal(item)}
                  style={{ position: 'relative' }}>
                  <Image
                    source={{ uri: item?.pessoas_desaparecidas_anexos[0]?.conteudo }}
                    style={[styles.photoScroll, { opacity: item.encontrado ? 0.6 : 1 }]}
                  />
                  {item.encontrado && (
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
          </View>
        </View>
      </ScrollView>
      <Modal show={showModal} setShowModal={setShowModal}>
        <View style={[styles.contentModal]}>
          <Text style={[styles.label, { marginBottom: 12 }]}>{missingPerson.nome}</Text>
          <View style={{ position: 'relative', width: '100%', height: '55%', marginBottom: 25 }}>
            {photosSelected !== '' && (
              <Image
                source={{ uri: photosSelected }}
                style={[styles.modalPhoto, { opacity: missingPerson.encontrado ? 0.6 : 1 }]}
              />
            )}
            {missingPerson.encontrado && (
              <Icon name='done' color={colors.sucess} size={60} style={{ position: 'absolute', bottom: 5, right: 5 }} />
            )}
          </View>
          {missingPerson.encontrado ? (
            <Button title='Já foi encontrado!' />
          ) : (
            <Button title='Ainda desaparecido!' onPress={() => handleSetEncontrado()} />
          )}

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
