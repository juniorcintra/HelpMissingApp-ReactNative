import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Logo from '../components/logo';
import HomePage from '../pages/HomePage';
import HelpPage from '../pages/HelpPage';
import PerfilPage from '../pages/PerfilPage';
import PeopleFound from '../pages/PeopleFound';
import MissingRegister from '../pages/MissingRegister';
import MissingDetail from '../pages/MissingDetail';

const { Navigator, Screen } = createDrawerNavigator();

const MainDrawer = () => {
  const CustomDrawer = props => (
    <View style={styles.container}>
      <View style={styles.wrapperLogo}>
        <Logo />
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        label='Sair'
        icon={({ _, color, size }) => <Icon name='exit-to-app' size={size} color={color} />}
        onPress={() => {
          AsyncStorage.removeItem('user');
          props.navigation.reset({
            routes: [{ name: 'Login' }],
          });
        }}
      />
    </View>
  );

  return (
    <Navigator drawerContent={props => CustomDrawer(props)} initialRouteName='Home'>
      <Screen
        name='Home'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='home' size={size} color={color} />,
        }}
      />

      <Screen
        name='Cadastrar Desaparecido'
        component={MissingRegister}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='app-registration' size={size} color={color} />,
        }}
      />

      <Screen
        name='Pessoas Encontradas'
        component={PeopleFound}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='done' size={size} color={color} />,
        }}
      />

      <Screen
        name='Histórico'
        component={HomePage}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='restore' size={size} color={color} />,
        }}
      />

      <Screen
        name='Perfil'
        component={PerfilPage}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='person' size={size} color={color} />,
        }}
      />

      <Screen
        name='Ajuda'
        component={HelpPage}
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <Logo />,
          drawerIcon: ({ _, color, size }) => <Icon name='accessibility-new' size={size} color={color} />,
        }}
      />

      <Screen
        name='MissingDetail'
        component={MissingDetail}
        label=''
        icon={null}
        options={{
          drawerItemStyle: { height: 0 }
        }}
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
