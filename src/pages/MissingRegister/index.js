import React, { useState } from 'react';
import { format } from 'date-fns';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { handleConvertImage } from '../../utils/functions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';

const MissingRegister = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [disappearanceDate, setDisappearanceDate] = useState(new Date());
  const [disappearanceLocation, setDisappearanceLocation] = useState('');
  const [contacts, setContacts] = useState([]);
  const [features, setFeatures] = useState([
    {id: '1', feature: 'Cabelo preto'},
    {id: '2', feature: 'Idoso'},
    {id: '3', feature: 'Pele braca'},
    {id: '4', feature: 'Olhos marrom escuro'},
  ]);
  const [clothingDisappearance, setClothingDisappearance] = useState([
    {id: '1', clothing: 'Camiseta preta'},
    {id: '2', clothing: 'Calça jeans'},
    {id: '3', clothing: 'Tênis preto'},
    {id: '4', clothing: 'Cordão prata'},
  ]);

  const handleRegister = () => {
    const body = {
      fullName,
      birthDate: format(birthDate, 'yyyy-MM-dd'),
      disappearanceDate: format(disappearanceDate, 'yyyy-MM-dd'),
      disappearanceLocation,
      contacts,
      features,
      clothingDisappearance,
    }

    console.log('register', body);
  }

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


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewUpload}>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.buttonUpload}>
            <Text style={styles.textUpload}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Input
            value={fullName}
            label="Nome Completo"
            placeholder="Jhoe Doe"
            autoCapitalize='words'
            onChangeText={setFullName}
          />
          <Input
            editable={false}
            icon='calendar-today'
            placeholder="xx/xx/xxxx"
            label="Data de Nascimento"
            onChangeText={setBirthDate}
            value={format(birthDate, 'dd/MM/yyyy')}
            onPress={() => showBirthCalendar('date')}
          />
          <Input
            editable={false}
            icon='calendar-today'
            placeholder="xx/xx/xxxx"
            label="Data de Desaparecimento"
            onChangeText={setDisappearanceDate}
            value={format(disappearanceDate, 'dd/MM/yyyy')}
            onPress={() => showDisappearanceCalendar('date')}
          />
          <Input
            placeholder="Endereço"
            value={disappearanceLocation}
            label="Local do Desaparecimento"
            onChangeText={setDisappearanceLocation}
          />
          <Input
            label="Contatos"
            value={contacts}
            keyboardType='number-pad'
            onChangeText={setContacts}
            icon='check-circle-outline'
            placeholder="(xx) xxxxx-xxxx"
          />
          <Input
            value={features}
            label="Características"
            onChangeText={setFeatures}
            icon='check-circle-outline'
            placeholder="Escreva aqui as características"
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
            label="Vestimenta do Desaparecimento"
            onChangeText={setClothingDisappearance}
            placeholder="Escreva aqui os vestimentos"
          />

          {clothingDisappearance.length > 0 && (
            <View style={styles.wrapperClothing}>
              {clothingDisappearance.map(item => (
                <View key={item.id} style={styles.rowClothing}>
                  <View style={styles.iconClothing}/>
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
    </ScrollView>
  );
};

export default MissingRegister;
