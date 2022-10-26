import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  wrapperSearch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputSearch: {
    width: '100%',
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.4)',

    fontSize: 16,
    color: colors.primary,
  },
  iconSearch: {
    position: 'absolute',
    color: colors.primary,
    fontSize: 24,
  },
  containerCard: {
    width: '100%',
    height: 74,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F0F0F0',
  },
  photo: {
    width: 51,
    height: 51,
    marginRight: 12,
    borderRadius: 25,
  },
  description: {
    flex: 2,
  },
  name: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Roboto-Bold',
  },
  age: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
  foundOn: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
  date: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
