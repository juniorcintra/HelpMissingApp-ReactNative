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
});

export default styles;
