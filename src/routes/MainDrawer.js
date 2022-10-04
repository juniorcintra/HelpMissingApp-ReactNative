import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import HomePage from '../pages/HomePage';
import Logo from '../components/logo';
import Sair from '../components/sair';

const { Navigator, Screen } = createDrawerNavigator();

const MainDrawer = () => {
  const CustomDrawer = props => (
    <View style={styles.container}>
      <View style={styles.wrapperLogo}>
        <Logo />
      </View>

      <DrawerItemList {...props} />
    </View>
  );

  return (
    <Navigator drawerContent={props => CustomDrawer(props)}>
      <Screen
        name='Home'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          drawerIcon: ({ focused, color, size }) => <Icon name='home' size={size} color={color} />,
        }}
      />

      <Screen
        name='Cadastrar Desaparecido'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          drawerIcon: ({ _, color, size }) => <Icon name='app-registration' size={size} color={color} />,
        }}
      />

      <Screen
        name='Pessoas Encontradas'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          drawerIcon: ({ _, color, size }) => <Icon name='done' size={size} color={color} />,
        }}
      />

      <Screen
        name='Estou em Dúvida'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          drawerIcon: ({ _, color, size }) => <Icon name='help-outline' size={size} color={color} />,
        }}
      />

      <Screen
        name='Perfil'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          drawerIcon: ({ _, color, size }) => <Icon name='person' size={size} color={color} />,
        }}
      />

      <Screen
        name='Sair'
        component={Sair}
        options={{
          drawerIcon: ({ _, color, size }) => <Icon name='exit-to-app' size={size} color={color} />,
        }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  wrapperLogo: { marginBottom: 10 },
});

export default MainDrawer;
