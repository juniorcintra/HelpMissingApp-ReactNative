import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { colors } from '../../styles/theme';

import styles from './styles';

const PeopleFound = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const date = [
    { id: '1', nome: 'Fabricio', idade: '18', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '2', nome: 'Jorge', idade: '56', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '3', nome: 'Jennifer', idade: '25', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '4', nome: 'Marcos', idade: '48', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '5', nome: 'Fabricio', idade: '18', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '6', nome: 'Jorge', idade: '56', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '7', nome: 'Jennifer', idade: '25', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '8', nome: 'Marcos', idade: '48', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '9', nome: 'Fabricio', idade: '18', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '10', nome: 'Jorge', idade: '56', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '11', nome: 'Jennifer', idade: '25', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
    { id: '12', nome: 'Marcos', idade: '48', encontrado: 'São Paulo, SP ', data: '01/10/2023' },
  ];

  const handleInfo = () => {};

  const renderCard = ({ item }) => {
    return (
      <View style={styles.containerCard}>
        <Image source={{ uri: 'https://picsum.photos/200/' }} style={styles.photo} />

        <View style={styles.description}>
          <Text style={styles.name}>
            {item?.nome}, <Text style={styles.age}>{item?.idade}</Text>
          </Text>
          <Text style={styles.foundOn}>Encontrado em: {item?.encontrado}</Text>
          <Text style={styles.date}>Data: {item?.data}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={handleInfo}>
          <Icon name='info' color={colors.primary} size={28} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperSearch}>
        <Icon name='search' style={styles.iconSearch} />
        <TextInput value={search} placeholder='Pesquisar' onChangeText={setSearch} style={styles.inputSearch} />
      </View>

      <FlatList
        data={date}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PeopleFound;
