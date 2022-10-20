import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
  },
  input: {
    width: '100%',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.4)',
    fontSize: 16,
    color: colors.primary,
  },
  ButtonIcon: {
    position: 'absolute',
    right: 0,
    top: 15
  },
});

export default styles;
