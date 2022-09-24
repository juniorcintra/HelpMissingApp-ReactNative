import { StyleSheet } from 'react-native';
import { colors } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {},
  wrapperPhoto: {
    flex: 1,
  },
  photo: {
    flex: 1,
    resizeMode: 'stretch',
  },
  buttonPrevPhoto: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 5,
  },
  buttonNextPhoto: {
    position: 'absolute',
    top: '50%',
    right: 0,
  },
  wrapperButton: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
    backgroundColor: colors.primary_900,
  },
  button: {
    padding: 8,
    marginHorizontal: 8,
    marginTop: 18,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
  },
  danger: { borderColor: colors.danger },
  infor: { borderColor: colors.infor },
  sucess: { borderColor: colors.sucess },
});

export default styles;
