import React from 'react';
import { ActivityIndicator } from 'react-native';

import Modal from '../components/Modal';

export default ({ show }) => {
  return (
    <Modal visible={show} noIcon={true}>
      <ActivityIndicator size='large' color='#FA472B' animating={true} />
    </Modal>
  );
};
