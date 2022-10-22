import React, { useCallback, useState } from 'react';
import { format } from 'date-fns';
import { View, Text, TouchableOpacity, ScrollView, Image, Keyboard, Alert } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';
import Modal from '../../components/Modal';
import { registerMissingPerson, registerUploadPhoto } from '../../store/middleware/missingPerson.middleware';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/loading';
import { useFocusEffect } from '@react-navigation/native';

const MissingRegister = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [disappearanceDate, setDisappearanceDate] = useState(new Date());
  const [disappearanceLocation, setDisappearanceLocation] = useState('');
  const [contacts, setContacts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photos64, setPhotos64] = useState([]);
  const [actualContact, setActualContact] = useState('');
  const [actualFeature, setActualFeature] = useState('');
  const [actualClothing, setActualClothing] = useState('');

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);

  const clearState = () => {
    setFullName('');
    setBirthDate(new Date());
    setDisappearanceDate(new Date());
    setDisappearanceLocation('');
    setContacts([]);
    setFeatures([]);
    setClothing([]);
    setPhotos64([]);
    setActualContact('');
    setActualFeature('');
    setActualClothing('');
  };

  const handleRegister = async () => {
    const body = {
      nome: fullName,
      caracteristicas: features,
      data_nascimento: format(birthDate, 'dd/MM/yyyy'),
      data_desaparecimento: format(disappearanceDate, 'dd/MM/yyyy'),
      local_desaparecimento: disappearanceLocation,
      contatos: contacts,
      vestimenta_desaparecimento: clothing,
    };

    Keyboard.dismiss();
    const missingPersonData = await dispatch(registerMissingPerson(body));
    await photos64.map(photo =>
      dispatch(
        registerUploadPhoto({
          pessoas_desaparecidas_id: missingPersonData.id,
          tipo: 'image',
          conteudo: `data:image/jpeg;base64,${photo}`,
        }),
      ),
    );
    clearState();
  };

  const showBirthCalendar = mode => {
    DateTimePickerAndroid.open({
      value: birthDate,
      display: 'spinner',
      maximumDate: new Date(),
      mode: mode,
      onChange: (event, selectedDate) => {
        if (event?.type === 'dismissed') {
          setBirthDate(birthDate);
          return;
        }
        setBirthDate(selectedDate);
      },
    });
  };

  const showDisappearanceCalendar = mode => {
    DateTimePickerAndroid.open({
      value: disappearanceDate,
      display: 'spinner',
      maximumDate: new Date(),
      mode: mode,
      onChange: (event, selectedDate) => {
        if (event?.type === 'dismissed') {
          setDisappearanceDate(disappearanceDate);
          return;
        }
        setDisappearanceDate(selectedDate);
      },
    });
  };

  async function handleSelectImage(type) {
    if (type === 'camera') {
      await launchCamera(
        {
          mediaType: 'photo',
          maxWdth: 300,
          maxHeight: 500,
          quality: 0.5,
          cameraType: 'back',
          includeBase64: true,
          saveToPhotos: true,
        },
        handleUploadPhotos,
      );
    } else {
      await launchImageLibrary(
        {
          mediaType: 'photo',
          maxWdth: 300,
          maxHeight: 500,
          quality: 0.5,
          includeBase64: true,
          selectionLimit: 1,
        },
        handleUploadPhotos,
      );
    }
  }

  async function handleUploadPhotos(data) {
    await data?.assets?.map(item => {
      setPhotos64([...photos64, item.base64]);
    });
    setShowModal(false);
  }

  function handleAddInfo(type) {
    if (type === 'contacts') {
      if(!actualContact) return;
      setContacts([...contacts, actualContact]);
      setActualContact('');
    } else if (type === 'feature') {
      if(!actualFeature) return;
      setFeatures([...features, actualFeature]);
      setActualFeature('');
    } else {
      if(!actualClothing) return;
      setClothing([...clothing, actualClothing]);
      setActualClothing('');
    }
  }

  function handleRemoveArray(date, type) {
    if (type === 'contacts') {
      Alert.alert('Deseja excluir', 'Tem certeza que deseja excluir?', [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Excluir', onPress: () => setContacts(state => state.filter((_, index) => index !== date)) },
      ]);
    } else if (type === 'feature') {
      Alert.alert('Deseja excluir', 'Tem certeza que deseja excluir?', [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Excluir', onPress: () => setFeatures(state => state.filter((_, index) => index !== date)) },
      ]);
    } else {
      Alert.alert('Deseja excluir', 'Tem certeza que deseja excluir?', [
        { text: 'Cancelar', onPress: () => {} },
        { text: 'Excluir', onPress: () => setClothing(state => state.filter((_, index) => index !== date)) },
      ]);
    }
  }

  useFocusEffect(
    useCallback(() => {
      clearState();
    }, []),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewUpload}>
          {photos64[0] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[0]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[1] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[1]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[2] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[2]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[3] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[3]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[4] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[4]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
          {photos64[5] ? (
            <Image
              style={styles.photoUploaded}
              source={{
                uri: `data:image/jpeg;base64,${photos64[5]}`,
              }}
            />
          ) : (
            <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload} onPress={() => setShowModal(!showModal)}>
              <Text style={styles.textUpload}>+</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.form}>
          <Input
            value={fullName}
            label='Nome Completo'
            placeholder='Jhoe Doe'
            autoCapitalize='words'
            onChangeText={setFullName}
          />
          <Input
            editable={false}
            icon='calendar-today'
            placeholder='xx/xx/xxxx'
            label='Data de Nascimento'
            onChangeText={setBirthDate}
            value={format(birthDate, 'dd/MM/yyyy')}
            onPress={() => showBirthCalendar('date')}
          />
          <Input
            editable={false}
            icon='calendar-today'
            placeholder='xx/xx/xxxx'
            label='Data de Desaparecimento'
            onChangeText={setDisappearanceDate}
            value={format(disappearanceDate, 'dd/MM/yyyy')}
            onPress={() => showDisappearanceCalendar('date')}
          />
          <Input
            placeholder='Endereço'
            value={disappearanceLocation}
            label='Local do Desaparecimento'
            onChangeText={setDisappearanceLocation}
          />
          <Input
            label='Contatos'
            value={actualContact}
            onChangeText={text => setActualContact(text)}
            icon='check-circle-outline'
            placeholder='Mãe - (24) 99999-9999'
            onPress={() => handleAddInfo('contacts')}
          />

          {contacts.length > 0 && (
            <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
              <View style={styles.wrapperButtomFeatures}>
                {contacts.map((item, index) => (
                  <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => handleRemoveArray(index, 'contacts')}>
                    <View style={styles.buttomFeatures}>
                      <Text style={styles.buttomTextFeatures}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}

          <Input
            value={actualFeature}
            label='Características'
            onChangeText={text => setActualFeature(text)}
            icon='check-circle-outline'
            placeholder='Escreva aqui as características'
            onPress={() => handleAddInfo('feature')}
          />

          {features.length > 0 && (
            <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
              <View style={styles.wrapperButtomFeatures}>
                {features.map((item, index) => (
                  <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => handleRemoveArray(index, 'feature')}>
                    <View style={styles.buttomFeatures}>
                      <Text style={styles.buttomTextFeatures}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}

          <Input
            icon='check-circle-outline'
            value={actualClothing}
            label='Vestimenta do Desaparecimento'
            onChangeText={text => setActualClothing(text)}
            placeholder='Escreva aqui os vestimentos'
            onPress={() => handleAddInfo('clothing')}
          />

          {clothing.length > 0 && (
            <View style={styles.wrapperClothing}>
              {clothing.map((item, index) => (
                <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => handleRemoveArray(index)}>
                  <View style={styles.rowClothing}>
                    <View style={styles.iconClothing} />
                    <Text style={styles.textClothing}>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View style={styles.divButtons}>
            <Button type='primary' title='Cadastrar' onPress={handleRegister} />
          </View>
        </View>
      </View>

      <Modal show={showModal} setShowModal={setShowModal}>
        <View style={styles.contentModal}>
          <Text style={styles.titleModal}>Selecione o tipo</Text>
          <View style={styles.wrapperButtonModal}>
            <Button title='Tirar foto' onPress={() => handleSelectImage('camera')} />
          </View>

          <View style={styles.wrapperButtonModal}>
            <Button title='Selecionar foto' onPress={() => handleSelectImage('galeria')} />
          </View>
        </View>
      </Modal>
      <Loading show={loading} />
    </ScrollView>
  );
};

export default MissingRegister;
