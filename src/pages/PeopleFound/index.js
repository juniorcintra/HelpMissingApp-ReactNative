import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from 'react-native';

import { colors } from '../../styles/theme';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { getMissingPerson } from '../../store/middleware/missingPerson.middleware';

import { useDispatch, useSelector } from 'react-redux';

const PeopleFound = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { missingPersons } = useSelector(state => state.missingPersonReducer);
  const { user } = useSelector(state => state.userReducer);


  const handleInfo = () => {};

  const handleGetMissingPersons = async name => {
    if (name.langht > 0) {
      await dispatch(
        getMissingPerson(`?limite=1&tem_historico=0&usuarios_id=${user?.id}&encontrado=1&nome=${name}`, true),
      );
    } else {
      await dispatch(getMissingPerson(`?limite=1&tem_historico=0&usuarios_id=${user?.id}&encontrado=1`, true));
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleGetMissingPersons(search);
    }, [search]),
  );

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
        data={[]}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PeopleFound;
