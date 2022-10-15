import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

import { colors } from '../../styles/theme';

export default props => {
  return (
    <Modal animationType='fade' transparent={true} visible={props.show} {...props}>
      <View style={styles.container}>{props.children}</View>
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
});
