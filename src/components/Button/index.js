import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ type = 'primary', title = '', onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={type === 'primary' ? styles.buttonPrimary : styles.buttonSecundary}>
      <Text style={type === 'primary' ? styles.textButtonPrimary : styles.textButtonSecundary}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
