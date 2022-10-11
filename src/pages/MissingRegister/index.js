import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { handleConvertImage } from '../../utils/functions';

import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles';

const MissingRegister = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [disappearanceDate, setDisappearanceDate] = useState('');
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
    const date = {
      contacts,
      features,
      fullName,
      birthDate,
      disappearanceDate,
      clothingDisappearance,
    }

    console.log('register', date);
  }

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
            value={birthDate}
            placeholder="xx/xx/xxxx"
            label="Data de Nascimento"
            onChangeText={setBirthDate}
          />
          <Input
            placeholder="xx/xx/xxxx"
            value={disappearanceDate}
            label="Data de Desaparecimento"
            onChangeText={setDisappearanceDate}
          />
          <Input
            icon
            label="Contatos"
            value={contacts}
            keyboardType='number-pad'
            onChangeText={setContacts}
            placeholder="(xx) xxxxx-xxxx"
          />
          <Input
            icon
            value={features}
            label="Características"
            onChangeText={setFeatures}
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
            icon
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
