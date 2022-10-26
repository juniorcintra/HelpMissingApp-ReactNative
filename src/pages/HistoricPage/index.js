import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { format } from 'date-fns';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/theme';
import Loading from '../../components/loading';

import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import {
  getMissingPersonPerHistoric,
  getMissingPersonPhoto,
  registerHistoricMissingPerson,
} from '../../store/middleware/missingPerson.middleware';
import { useFocusEffect } from '@react-navigation/native';
import { calcDaysFound, CalcIdade } from '../../utils/functions';

const HistoricPage = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('vi');
  const [search, setSearch] = useState('');
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);
  const { photosMissingPerson, missingPersonsHistoric } = useSelector(state => state.missingPersonReducer);
  const { user } = useSelector(state => state.userReducer);

  const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  const usePagerScrollHandler = (handlers, dependencies) => {
    const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
    const subscribeForEvents = ['onPageScroll'];

    return useEvent(
      event => {
        'worklet';
        const { onPageScroll } = handlers;
        if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
          onPageScroll(event, context);
        }
      },
      subscribeForEvents,
      doDependenciesDiffer,
    );
  };

  const handler = usePagerScrollHandler({
    onPageScroll: () => {
      'worklet';
    },
  });

  const handleClose = async () => {
    if (missingPersonsHistoric.length === index + 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  let listaFiltrada = missingPersonsHistoric.filter(function (value) {
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
        string = string?.replace(expressaoRegular, letra);
      }

      return string;
    }

    let semAcento = removerAcentos(value.nome);

    if (search.match(/^.*[^a-zA-Z 0-9]+.*$/g)) {
      return value.nome.toUpperCase().includes(search.toUpperCase());
    } else {
      return semAcento?.toUpperCase().includes(search.toUpperCase());
    }
  });

  const handleSendModal = async () => {
    const body = {
      pessoas_desaparecidas_id: missingPersonsHistoric[index]?.id,
      tipo_historico: 'vi',
      descricao: `Vi no dia ${format(dateTime, 'dd/MM/yyyy')}, local: ${place}, e estava assim: ${description}`,
      usuarios_id: user?.id,
    };

    await dispatch(registerHistoricMissingPerson(body));

    setShowModal(false);
    setPlace('');
    setDescription('');
    setDateTime(new Date());

    handleGetMissingPersons();
  };

  const showCalendar = currentMode => {
    DateTimePickerAndroid.open({
      value: dateTime,
      display: 'default',
      maximumDate: new Date(),
      mode: currentMode,
      onChange: (event, selectedDate) => {
        if (event?.type === 'dismissed') {
          setDateTime(dateTime);
          return;
        }
        setDateTime(selectedDate);
      },
    });
  };

  const handleGetMissingPersons = async () => {
    await dispatch(
      getMissingPersonPerHistoric(
        `?limite=100&tem_historico=1&usuarios_id=${user?.id}&encontrado=0&tipo_historico=${status}`,
      ),
    );
  };

  const handleGetMissingPersonPhotos = async () => {
    await dispatch(getMissingPersonPhoto(`?pessoas_desaparecidas_id=${missingPersonsHistoric[index]?.id}&tipo=image`));
  };

  useEffect(() => {
    handleGetMissingPersonPhotos();
  }, [missingPersonsHistoric, index]);

  useFocusEffect(
    useCallback(() => {
      handleGetMissingPersons();
    }, [status]),
  );

  const renderCard = ({ item }) => {
    return (
      <View style={styles.containerCardFound}>
        <Image source={{ uri: 'https://picsum.photos/200/' }} style={styles.photoFound} />

        <View style={styles.descriptionFound}>
          <Text style={styles.nameFound}>
            {item?.nome}
            <Text style={styles.ageFound}>, {item?.data_nascimento && CalcIdade(item.data_nascimento)}</Text>
          </Text>
          <Text style={styles.foundOnFound}>
            Desaparecido em: {item?.updatedAt && format(new Date(item?.updatedAt), 'dd/MM/yyyy')}
          </Text>
        </View>

        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('MissingDetail', { person: item })}>
          <Icon name='info' color={colors.primary} size={28} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View style={styles.divButtonStatus}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.buttonStatus, { opacity: status !== 'vi' ? 0.6 : 1 }]}
          onPress={() => setStatus('vi')}>
          <Text style={styles.textStatusButton}>Vi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.buttonStatus, { opacity: status === 'vi' ? 0.6 : 1 }]}
          onPress={() => setStatus('naovi')}>
          <Text style={styles.textStatusButton}>Não vi</Text>
        </TouchableOpacity>
      </View>
      {status === 'naovi' ? (
        <>
          {missingPersonsHistoric?.length > 0 ? (
            <>
              <View style={styles.container}>
                <View style={styles.card}>
                  <AnimatedPager style={styles.wrapperPhoto} initialPage={0} onPageScroll={handler}>
                    {photosMissingPerson.map(item => (
                      <View key={item.id} style={styles.wrapperPhoto}>
                        <Image style={styles.photo} source={{ uri: item.conteudo }} />
                      </View>
                    ))}
                  </AnimatedPager>

                  <View style={styles.wrapperInfo}>
                    <View style={styles.rowInfo}>
                      <View style={styles.rowText}>
                        <Text style={styles.nameUser}>{missingPersonsHistoric[index]?.nome}</Text>
                        <Text style={styles.ageUser}>
                          {missingPersonsHistoric[index]?.data_nascimento &&
                            CalcIdade(missingPersonsHistoric[index]?.data_nascimento)}
                        </Text>
                      </View>
                      <View style={styles.rowInfo}>
                        <Text style={styles.rowTextBold}>
                          Desaparecido em:
                          <Text style={styles.rowTextRegular}>
                            {' '}
                            {missingPersonsHistoric[index]?.data_desaparecimento &&
                              format(new Date(missingPersonsHistoric[index]?.data_desaparecimento), 'dd/MM/yyyy')}
                          </Text>
                        </Text>
                        <Text style={styles.rowTextBold}>
                          Local:
                          <Text style={styles.rowTextRegular}>
                            {' '}
                            {missingPersonsHistoric[index]?.local_desaparecimento}
                          </Text>
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      style={styles.buttonInfo}
                      onPress={() =>
                        navigation.navigate('MissingDetail', {
                          person: missingPersonsHistoric[index],
                          photosPerson: photosMissingPerson,
                        })
                      }>
                      <Icon name='info' color={colors.primary} size={28} />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.wrapperButton}>
                  <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.danger]} onPress={handleClose}>
                    <Icon name='close' color={colors.danger} size={45} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.button, styles.infor]}
                    onPress={() => navigation.navigate('Ajuda')}>
                    <Text style={styles.inforText}>Ajuda</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.button, styles.sucess]}
                    onPress={() => setShowModal(true)}>
                    <Icon name='done' color={colors.sucess} size={45} />
                  </TouchableOpacity>
                </View>
              </View>

              <Modal show={showModal} setShowModal={setShowModal}>
                <View style={styles.contentModal}>
                  <Text style={styles.TitleModal}>Descreva aqui o que você viu!</Text>
                  <Input
                    editable={false}
                    label='Data'
                    value={format(dateTime, 'dd/MM/yyyy')}
                    icon='calendar-today'
                    placeholder='xx/xx/xxxx'
                    onPress={() => showCalendar('date')}
                  />
                  <Input label='Local' value={place} onChangeText={setPlace} placeholder='Local que voce viu...' />

                  <Text style={styles.labelTextArea}>Descrição</Text>
                  <TextInput
                    multiline
                    value={description}
                    placeholder='Descrição...'
                    style={styles.textInputArea}
                    onChangeText={setDescription}
                  />

                  <View style={styles.wrapperButtonModal}>
                    <Button title='Enviar' onPress={handleSendModal} />
                  </View>
                </View>
              </Modal>
            </>
          ) : (
            <View style={styles.notFoundView}>
              <Icon name='info' color={colors.primary} size={45} />
              <Text style={styles.notFoundText}>Nenhum dado encontrado</Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.containerFound}>
          <View style={styles.wrapperSearchFound}>
            <Icon name='search' style={styles.iconSearchFound} />
            <TextInput
              value={search}
              placeholder='Pesquisar'
              onChangeText={setSearch}
              style={styles.inputSearchFound}
            />
          </View>

          <FlatList
            data={listaFiltrada}
            keyExtractor={item => item.id}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      <Loading show={loading} />
    </>
  );
};

export default HistoricPage;
