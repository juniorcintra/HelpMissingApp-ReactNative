import React from 'react';
import { Modal, ActivityIndicator, View } from 'react-native';
import { colors } from '../styles/theme';

export default ({ show }) => {
  return (
    <Modal animationType='fade' transparent={true} visible={show}>
      <View
        style={{
          height: '100%',
          width: '100%',
          flex: 1,
          backgroundColor: colors.primary_500,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size='large' color='#FA472B' animating={true} />
      </View>
    </Modal>
  );
};
