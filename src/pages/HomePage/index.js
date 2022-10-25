import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
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
  getMissingPerson,
  getMissingPersonPhoto,
  registerHistoricMissingPerson,
} from '../../store/middleware/missingPerson.middleware';
import { useFocusEffect } from '@react-navigation/native';
import { CalcIdade } from '../../utils/functions';

const HomePage = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);
  const { missingPerson, photosMissingPerson } = useSelector(state => state.missingPersonReducer);
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
    const body = {
      pessoas_desaparecidas_id: missingPerson?.id,
      tipo_historico: 'não vi',
      descricao: null,
      usuarios_id: user?.id,
    };

    await dispatch(registerHistoricMissingPerson(body, false));
    handleGetMissingPersons();
  };

  const handleSendModal = async () => {
    const body = {
      pessoas_desaparecidas_id: missingPerson?.id,
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
    await dispatch(getMissingPerson(`?limite=1&tem_historico=0&usuarios_id=${user?.id}&encontrado=0`));
  };

  const handleGetMissingPersonPhotos = async () => {
    await dispatch(getMissingPersonPhoto(`?pessoas_desaparecidas_id=${missingPerson?.id}&tipo=image`));
  };

  useEffect(() => {
    handleGetMissingPersonPhotos();
  }, [missingPerson]);

  useFocusEffect(
    useCallback(() => {
      handleGetMissingPersons();
    }, []),
  );

  return (
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
                <Text style={styles.nameUser}>{missingPerson.nome}</Text>
                <Text style={styles.ageUser}>
                  {missingPerson?.data_nascimento && CalcIdade(missingPerson.data_nascimento)}
                </Text>
              </View>
              <View style={styles.rowInfo}>
                <Text style={styles.rowTextBold}>
                  Desaparecido em:
                  <Text style={styles.rowTextRegular}> {missingPerson.data_desaparecimento}</Text>
                </Text>
                <Text style={styles.rowTextBold}>
                  Local:
                  <Text style={styles.rowTextRegular}> {missingPerson.local_desaparecimento}</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.buttonInfo}
              onPress={() => navigation.navigate('MissingDetail')}>
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
      <Loading show={loading} />
    </>
  );
};

export default HomePage;
