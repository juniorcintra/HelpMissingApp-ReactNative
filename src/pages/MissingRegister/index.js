import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { handleConvertImage } from '../../utils/functions';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';
import Modal from '../../components/Modal';

const MissingRegister = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [disappearanceDate, setDisappearanceDate] = useState(new Date());
  const [disappearanceLocation, setDisappearanceLocation] = useState('');
  const [contacts, setContacts] = useState([]);
  const [features, setFeatures] = useState([
    { id: '1', feature: 'Cabelo preto' },
    { id: '2', feature: 'Idoso' },
    { id: '3', feature: 'Pele braca' },
    { id: '4', feature: 'Olhos marrom escuro' },
  ]);
  const [clothingDisappearance, setClothingDisappearance] = useState([
    { id: '1', clothing: 'Camiseta preta' },
    { id: '2', clothing: 'Calça jeans' },
    { id: '3', clothing: 'Tênis preto' },
    { id: '4', clothing: 'Cordão prata' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [photos64, setPhotos64] = useState([]);

  const handleRegister = async () => {
    const body = {
      fullName,
      birthDate: birthDate,
      disappearanceDate: disappearanceDate,
      disappearanceLocation,
      contacts,
      features,
      clothingDisappearance,
    };

    console.log('register', body);
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
    console.log('teste', data);

    await data?.assets?.map(item => {
      setPhotos64([...photos64, item.base64]);
    });

    setShowModal(false);
  }

  console.log(photos64.length);

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
            value={contacts}
            keyboardType='number-pad'
            onChangeText={setContacts}
            icon='check-circle-outline'
            placeholder='(xx) xxxxx-xxxx'
          />
          <Input
            value={features}
            label='Características'
            onChangeText={setFeatures}
            icon='check-circle-outline'
            placeholder='Escreva aqui as características'
          />

          {features.length > 0 && (
            <ScrollView style={styles.scrollFeatures} showsVerticalScrollIndicator={false}>
              <View style={styles.wrapperButtomFeatures}>
                {features.map(item => (
                  <View key={item.id} style={styles.buttomFeatures}>
                    <Text style={styles.buttomTextFeatures}>{item.feature}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}

          <Input
            icon='check-circle-outline'
            value={clothingDisappearance}
            label='Vestimenta do Desaparecimento'
            onChangeText={setClothingDisappearance}
            placeholder='Escreva aqui os vestimentos'
          />

          {clothingDisappearance.length > 0 && (
            <View style={styles.wrapperClothing}>
              {clothingDisappearance.map(item => (
                <View key={item.id} style={styles.rowClothing}>
                  <View style={styles.iconClothing} />
                  <Text style={styles.textClothing}>{item.clothing}</Text>
                </View>
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
          <View style={styles.wrapperButtonModal}>
            <Button title='Tirar foto' onPress={() => handleSelectImage('camera')} />
          </View>

          <View style={styles.wrapperButtonModal}>
            <Button title='Selecionar foto' onPress={() => handleSelectImage('galeria')} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MissingRegister;
