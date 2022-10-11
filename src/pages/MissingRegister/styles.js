import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  viewUpload: {
    width: '90%',
    height: 300,
    borderWidth: 1,
    borderColor: '#9f9f9f',
    borderRadius: 7,
    marginTop: 20,
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  buttonUpload: {
    width: 90,
    height: 120,
    borderWidth: 2,
    borderColor: '#9f9f9f',
    borderRadius: 5,
    marginVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  textUpload: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9f9f9f',
  },
  form: {
    width: '90%',
    marginTop: 4,
  },
  divButtons: {
    marginTop: 32,
  },
  buttonPrimary: {
    width: '100%',
    height: 60,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonPrimary: { fontFamily: 'Roboto-Bold', fontSize: 16, lineHeight: 18, color: '#fff' },
});

export default styles;
