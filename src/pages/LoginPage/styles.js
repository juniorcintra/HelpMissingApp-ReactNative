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
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
  divButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  divForgot: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    marginBottom: 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  labelForgot: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  buttonTransparent: {
    width: 90,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textbuttonTransparent: { fontFamily: 'Roboto-Bold', fontSize: 16, lineHeight: 18, color: '#fff' },
});

export default styles;
