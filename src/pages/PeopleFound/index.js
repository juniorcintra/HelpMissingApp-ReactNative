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

  const handleGetMissingPersons = async () => {
    await dispatch(getMissingPerson(`?limite=1&tem_historico=0&usuarios_id=${user?.id}&encontrado=1`, true));
  };

  let listaFiltrada = missingPersons.filter(function (value) {
    function removerAcentos(newStringComAcento) {
      var string = newStringComAcento;
      var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        e: /[\xE8-\xEB]/g,
        i: /[\xEC-\xEF]/g,
        o: /[\xF2-\xF6]/g,
        u: /[\xF9-\xFC]/g,
        c: /\xE7/g,
        n: /\xF1/g,
      };

      for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace(expressaoRegular, letra);
      }

      return string;
    }

    let semAcento = removerAcentos(value.nome);

    if (search.match(/^.*[^a-zA-Z 0-9]+.*$/g)) {
      return value.nome.toUpperCase().includes(search.toUpperCase());
    } else {
      return semAcento.toUpperCase().includes(search.toUpperCase());
    }
  });

  useFocusEffect(
    useCallback(() => {
      handleGetMissingPersons();
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
        data={listaFiltrada}
        keyExtractor={item => item.id}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PeopleFound;
