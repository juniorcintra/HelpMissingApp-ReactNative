import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divLogo: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logo: {
    width: 70,
    height: 75,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'BethEllen-Regular',
    fontSize: 24,
  },
  divInputs: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  divInput: { marginVertical: 10, alignItems: 'flex-start', width: '100%' },
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 18,
    marginLeft: 3,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    color: '#fff',
  },
  lastInput: {
    marginBottom: 40,
  },
  divButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
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
