import React from 'react';
import { Modal, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../styles/theme';

const iconClose = require('../../../assets/images/close_icon.png');

export default props => {
  return (
    <Modal animationType='fade' transparent={true} visible={props.show} {...props}>
      <View style={styles.container}>
        {props.children}
        {!props.noIcon && (
          <TouchableOpacity activeOpacity={0.6} onPress={() => props?.setShowModal(false)}>
            <Image source={iconClose} style={styles.iconClose} />
          </TouchableOpacity>
        )}
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
    height: 50,
    width: 50,
    marginTop: 24,
  },
});
