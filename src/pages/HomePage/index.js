import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { format } from 'date-fns';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import Picker from '@ouroboros/react-native-picker';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/theme';
import Loading from '../../components/loading';

import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getMissingPerson } from '../../store/middleware/missingPerson.middleware';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [selectedHour, setSelectedHour] = useState('00');
  const [selectedMinute, setSelectedMinute] = useState('00');

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.genericReducer);
  const { missingPersons } = useSelector(state => state.missingPersonReducer);

  const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  const photos = [
    {
      id: 1,
      url: 'https://cdn.pixabay.com/photo/2021/08/26/17/08/cadillac-6576666_960_720.jpg',
    },
    {
      id: 2,
      url: 'https://cdn.pixabay.com/photo/2021/10/12/22/24/mulled-wine-6704928_960_720.jpg',
    },
    {
      id: 3,
      url: 'https://cdn.pixabay.com/photo/2022/09/19/09/27/nuts-7465088_960_720.jpg',
    },
    {
      id: 4,
      url: 'https://cdn.pixabay.com/photo/2022/09/19/15/19/meerkat-7465819_960_720.jpg',
    },
    {
      id: 5,
      url: 'https://cdn.pixabay.com/photo/2022/09/07/09/29/cheetah-7438381_960_720.jpg',
    },
  ];

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

  const handleClose = () => {};

  const handleSendModal = () => {
    const body = {
      place,
      description,
      date: format(dateTime, 'yyyy-MM-dd'),
    };

    setShowModal(false);
    setPlace('');
    setDescription('');
    setDateTime(new Date());
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
    await dispatch(getMissingPerson());
  };

  useEffect(() => {
    handleGetMissingPersons();
  }, []);

  return (
    <>
      <View style={styles.container}>
          <View style={styles.card}>
            <AnimatedPager style={styles.wrapperPhoto} initialPage={0} onPageScroll={handler}>
              {photos.map(item => (
                <View key={item.id} style={styles.wrapperPhoto}>
                  <Image style={styles.photo} source={{ uri: item.url }} />
                </View>
              ))}
            </AnimatedPager>

            <View style={styles.wrapperInfo}>
              <View style={styles.rowInfo}>
                <View style={styles.rowText}>
                  <Text style={styles.nameUser}>Fabricio</Text>
                  <Text style={styles.ageUser}>26</Text>
                </View>
                <View style={styles.rowInfo}>
                  <Text style={styles.rowTextBold}>
                    Desaparecido em:
                    <Text style={styles.rowTextRegular}> 10/09/2022 às 19:32</Text>
                  </Text>
                  <Text style={styles.rowTextBold}>
                    Local:
                    <Text style={styles.rowTextRegular}> São José - SC</Text>
                  </Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.6} style={styles.buttonInfo} onPress={() => {}}>
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
          <View style={styles.containerSelect}>
            <Text style={styles.labelSelect}>Horário</Text>

            {/* <View style={styles.rowSelect}>
              <View style={styles.rowItem}>
                <Picker
                  onChanged={setSelectedHour}
                  options={[
                    { value: '01', text: '01' },
                    { value: '02', text: '02' },
                    { value: '03', text: '03' },
                    { value: '04', text: '04' },
                    { value: '05', text: '05' },
                    { value: '06', text: '06' },
                    { value: '07', text: '07' },
                    { value: '08', text: '08' },
                    { value: '09', text: '09' },
                    { value: '10', text: '10' },
                    { value: '11', text: '11' },
                    { value: '12', text: '12' },
                    { value: '13', text: '13' },
                    { value: '14', text: '14' },
                    { value: '15', text: '15' },
                    { value: '16', text: '16' },
                    { value: '17', text: '17' },
                    { value: '18', text: '18' },
                    { value: '19', text: '19' },
                    { value: '20', text: '20' },
                    { value: '21', text: '21' },
                    { value: '22', text: '22' },
                    { value: '23', text: '23' },
                    { value: '00', text: '00' },
                  ]}
                  style={{ borderWidth: 1, borderColor: '#a7a7a7', borderRadius: 5, marginBottom: 5, padding: 5 }}
                  textAlign='center'
                  value={selectedHour}
                />
                <Text style={styles.textSelect}>H</Text>
              </View>

              <View style={styles.rowItem}>
                <Picker
                  onChanged={setSelectedMinute}
                  options={[
                    { value: '00', text: '00' },
                    { value: '01', text: '01' },
                    { value: '02', text: '02' },
                    { value: '03', text: '03' },
                    { value: '04', text: '04' },
                    { value: '05', text: '05' },
                    { value: '06', text: '06' },
                    { value: '07', text: '07' },
                    { value: '08', text: '08' },
                    { value: '09', text: '09' },
                    { value: '10', text: '10' },
                    { value: '11', text: '11' },
                    { value: '12', text: '12' },
                    { value: '13', text: '13' },
                    { value: '14', text: '14' },
                    { value: '15', text: '15' },
                    { value: '16', text: '16' },
                    { value: '17', text: '17' },
                    { value: '18', text: '18' },
                    { value: '19', text: '19' },
                    { value: '20', text: '20' },
                    { value: '21', text: '21' },
                    { value: '22', text: '22' },
                    { value: '23', text: '23' },
                    { value: '24', text: '24' },
                    { value: '25', text: '25' },
                    { value: '26', text: '26' },
                    { value: '27', text: '27' },
                    { value: '28', text: '28' },
                    { value: '29', text: '29' },
                    { value: '30', text: '30' },
                    { value: '31', text: '31' },
                    { value: '32', text: '32' },
                    { value: '33', text: '33' },
                    { value: '34', text: '34' },
                    { value: '35', text: '35' },
                    { value: '36', text: '36' },
                    { value: '37', text: '37' },
                    { value: '38', text: '38' },
                    { value: '39', text: '39' },
                    { value: '40', text: '40' },
                    { value: '41', text: '41' },
                    { value: '42', text: '42' },
                    { value: '43', text: '43' },
                    { value: '44', text: '44' },
                    { value: '45', text: '45' },
                    { value: '46', text: '46' },
                    { value: '47', text: '47' },
                    { value: '48', text: '48' },
                    { value: '49', text: '49' },
                    { value: '50', text: '50' },
                    { value: '51', text: '51' },
                    { value: '52', text: '52' },
                    { value: '53', text: '53' },
                    { value: '54', text: '54' },
                    { value: '55', text: '55' },
                    { value: '56', text: '56' },
                    { value: '57', text: '57' },
                    { value: '58', text: '58' },
                    { value: '59', text: '59' },
                    
                  ]}
                  style={{ borderWidth: 1, borderColor: '#a7a7a7', borderRadius: 5, marginBottom: 5, padding: 5, marginLeft: 12 }}
                  textAlign='center'
                  value={selectedMinute}
                />
                <Text style={styles.textSelect}>M</Text>
              </View>
            </View> */}
          </View>

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
