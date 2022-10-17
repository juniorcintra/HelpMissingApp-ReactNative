import React, { useState } from 'react';
import { format } from 'date-fns';
import PagerView from 'react-native-pager-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/theme';

import styles from './styles';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');

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
    }

    console.log('Object Modal',body);
    
    setShowModal(false);
    setPlace('');
    setDescription('');
    setDateTime(new Date());
  };

  const showCalendar = (currentMode) => {
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
          {/* <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.infor]} onPress={handleInfo}>
            <Text style={styles.inforText}>Pular</Text>
          </TouchableOpacity> */}
          <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.sucess]} onPress={() => setShowModal(true)}>
            <Icon name='done' color={colors.sucess} size={45} />
          </TouchableOpacity>
        </View>
      </View>

      <Modal show={showModal}>
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
          <Input
            label='Local' 
            value={place}
            onChangeText={setPlace}
            placeholder='Local que voce viu...' 
          />
          
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
  );
};

export default HomePage;
