import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  buttonPrimary: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.primary,
  },
  buttonSecundary: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  textButtonPrimary: {
    fontSize: 16,
    lineHeight: 18,
    color: colors.white,
    fontFamily: 'Roboto-Bold',
  },
  textButtonSecundary: {
    fontSize: 16,
    lineHeight: 18,
    color: colors.primary,
    fontFamily: 'Roboto-Bold',
  },
});

export default styles;
