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
    color: colors.primary_500,
  },
  form: {
    width: '90%',
    marginTop: 4,
  },
  scrollFeatures: {},
  wrapperButtomFeatures: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  buttomFeatures: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FBAD40',
  },
  buttomTextFeatures: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    color: colors.primary,
  },
  wrapperClothing: {
    width: '100%',
    marginTop: 12,
  },
  rowClothing: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  iconClothing: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 5,
    marginRight: 20,
    backgroundColor: colors.primary,
  },
  textClothing: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: colors.primary_500,
  },
  divButtons: {
    marginTop: 32,
  },
  wrapperButtonModal: {
    paddingTop: 18,
    marginBottom: -20,
  },
  contentModal: {
    width: '80%',
    borderRadius: 15,
    borderTopRightRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: colors.white,
    position: 'relative',
    zIndex: 0
  },
  photoUploaded: {
    width: 90,
    height: 120,
    borderWidth: 2,
    borderColor: '#9f9f9f',
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default styles;
