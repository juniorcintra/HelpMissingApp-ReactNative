import React, { useLayoutEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';

import { colors } from '../../styles/theme';
import styles from './styles';

const imageLogo = require('../../../assets/images/logo_help.png');

const HomePage = () => {
  const { setOptions } = useNavigation();
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

  const handleInfo = () => {};

  const handleSucess = () => {};

  //Header
  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => (
        <View style={styles.header}>
          <Image source={imageLogo} style={styles.headerLogo} />
          <Text style={styles.headerTitle}>Help Missing!</Text>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedPager style={styles.wrapperPhoto} initialPage={0} onPageScroll={handler}>
        {photos.map(item => (
          <View key={item.id} style={styles.wrapperPhoto}>
            <Image style={styles.photo} source={{ uri: item.url }} />
          </View>
        ))}
      </AnimatedPager>

      <View style={styles.wrapperInfo}>
        <View style={styles.rowText}>
          <Text style={styles.nameUser}>Nome</Text>
          <Text style={styles.ageUser}>26</Text>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.description}>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
            utilizado desde o século XVI.
          </Text>
          <TouchableOpacity activeOpacity={0.6} style={{}} onPress={() => {}}>
            <Icon name='info' color={'#000'} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.wrapperButton}>
        <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.danger]} onPress={handleClose}>
          <Icon name='close' color={colors.danger} size={45} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.infor]} onPress={handleInfo}>
          <Icon name='priority-high' color={colors.infor} size={45} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={[styles.button, styles.sucess]} onPress={handleSucess}>
          <Icon name='done' color={colors.sucess} size={45} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
