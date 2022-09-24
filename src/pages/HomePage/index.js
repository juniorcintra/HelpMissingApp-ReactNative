import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

const HomePage = () => {
  return (
    <View>
      <Text>Logado</Text>
      <Icon name="done" color="green" size={60} />
    </View>
  );
};

export default HomePage;
