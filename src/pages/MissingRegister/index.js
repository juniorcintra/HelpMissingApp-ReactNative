import React, { useLayoutEffect } from 'react';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Animated, { useHandler, useEvent } from 'react-native-reanimated';

import { handleConvertImage } from '../../utils/functions';

import { colors } from '../../styles/theme';
import Logo from '../../components/logo';

import styles from './styles';

const MissingRegister = () => {
  const { setOptions } = useNavigation();
  const AnimatedPager = Animated.createAnimatedComponent(PagerView);

  //Header
  useLayoutEffect(() => {
    setOptions({
      headerTitle: () => <Logo />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewUpload}>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonUpload}>
          <Text style={styles.textUpload}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MissingRegister;
