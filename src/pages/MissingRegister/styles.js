import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  viewUpload: {
    width: '90%',
    height: 300,
    borderWidth: 1,
    borderColor: colors.primary,
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
    borderColor: colors.primary,
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
    color: colors.primary,
  },
});

export default styles;
