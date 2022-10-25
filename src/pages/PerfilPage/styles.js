import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    marginBottom: 10
  },
  headerAvatar: {
    width: 100,
    height: 100,
    marginTop: 15
  },
  headerTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    lineHeight: 18,
    color: '#000',
    marginTop: 15
  },
  divInput: { 
    marginVertical: 10, 
    width: '80%' 
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    lineHeight: 18,
    color: '#000',
  },
  input: {
    width: '100%',
    borderBottomColor: colors.primary_500,
    borderBottomWidth: 1,
    fontSize: 14,
    color: '#000',
  },
  lastInput: {
    marginBottom: 40,
  },
  divScroll: {
    marginTop: 8,
    marginBottom: 15,
    marginHorizontal: 8,
  },
  photoScroll: {
    width: 120,
    height: 120,
    marginHorizontal: 4,
    borderRadius: 10
  },
  contentModal: {
    width: '80%',
    height: 493,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingTop: 32,
    paddingBottom: 13,
    backgroundColor: colors.white,
  },
  modalPhoto: {
    width: '100%',
    height: '80%',
    borderRadius: 5,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  itleModalHistory: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default styles;
