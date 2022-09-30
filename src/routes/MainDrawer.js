import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from '../pages/HomePage';
import Sair from '../components/sair';

const { Navigator, Screen } = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Navigator>
      <Screen name='Home' component={HomePage} options={{ headerTitleAlign: 'center' }} />
      <Screen name='Cadastrar Desaparecido' component={HomePage} options={{ headerTitleAlign: 'center' }} />
      <Screen name='Perfil' component={HomePage} options={{ headerTitleAlign: 'center' }} />
      <Screen
        name='Sair'
        component={Sair}
        listeners={({ navigation }) => ({
          state: e => {
            if (e.data.state.index === 3) {
              AsyncStorage.clear();
              navigation.navigate('Login');
            }
          },
        })}
      />
    </Navigator>
  );
};

export default MainDrawer;
