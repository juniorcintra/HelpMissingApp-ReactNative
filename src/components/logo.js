import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

const Logo = () => {
  const imageLogo = require('../../assets/images/logo_help.png');

  return (
    <View style={styles.header}>
      <Image source={imageLogo} style={styles.headerLogo} />
      <Text style={styles.headerTitle}>Help Missing!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.primary,
    fontFamily: 'BethEllen-Regular',
    fontSize: 18,
    paddingLeft: 10,
  },
  headerLogo: {
    width: 30,
    height: 35,
    marginBottom: 10,
  },
});

export default Logo;
