import React from 'react';
import { Modal, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/theme';

const iconClose = require('../../../assets/images/close_icon.png');

export default props => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.show}
      onRequestClose={() => props.setShowModal(false)}
      {...props}
    >
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props?.setShowModal(false)}>
          <Image source={iconClose} style={styles.iconClose} />
        </TouchableOpacity>
        {props.children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary_500,
  },
  iconClose: {
    height: 35,
    width: 35,
    position: 'absolute',
    zIndex: 10,
    // elevation: ,
    top: -30,
    left: 130
  },
});
