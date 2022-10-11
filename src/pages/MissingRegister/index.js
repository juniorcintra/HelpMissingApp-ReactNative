import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { handleConvertImage } from '../../utils/functions';

import { colors } from '../../styles/theme';
import Input from '../../components/Input';

import styles from './styles';

const MissingRegister = () => {
  const [contacts, setContacts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [disappearanceDate, setDisappearanceDate] = useState('');
  const [clothingDisappearance, setClothingDisappearance] = useState([]);

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
          <Input
            icon
            value={clothingDisappearance}
            label="Vestimenta do Desaparecimento"
            onChangeText={setClothingDisappearance}
            placeholder="Escreva aqui os vestimentos"
          />
          <View style={styles.divButtons}>
            <TouchableOpacity 
              activeOpacity={0.6} 
              onPress={handleRegister}
              style={styles.buttonPrimary}
            >
              <Text style={styles.textButtonPrimary}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MissingRegister;
