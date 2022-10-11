import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props?.label}</Text>
      <View style={styles.row}>
        <TextInput style={styles.input} {...props} />

        {props.icon && (
          <TouchableOpacity
            onPress={props.onPress} 
            activeOpacity={0.6}
            style={styles.ButtonIcon}
          >
            <Icon name='check-circle-outline' size={25} color='#000' />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;
