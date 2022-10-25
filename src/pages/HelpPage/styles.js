import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 27,
  },
  button: {
    width: 117,
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: '#FBAD40',
  },
  titleButton: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 7,
  },
  descriptionButton: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.primary_800,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.primary_800,
    textAlign: 'justify',
    marginBottom: 10,
  },
  footer: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.primary_800,
    textAlign: 'center',
    marginBottom: 10,
  },
  bold: {
    fontFamily: 'Roboto-Bold',
  },
});

export default styles;
