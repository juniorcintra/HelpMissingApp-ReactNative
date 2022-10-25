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
  photoUploaded: {
    width: 90,
    height: 120,
    borderWidth: 2,
    borderColor: '#9f9f9f',
    borderRadius: 5,
    marginVertical: 5,
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
  label: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#000',
    marginTop: 16,
  },
  scrollFeatures: {},
  wrapperButtomFeatures: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginLeft: -12,
  },
  buttomFeatures: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginLeft: 12,
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
    marginBottom: 32,
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
  contentModal: {
    width: '80%',
    height: 493,
    borderRadius: 15,
    paddingHorizontal: 25,
    paddingTop: 32,
    paddingBottom: 13,
    backgroundColor: colors.white,
  },
  TitleModalHistory: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    color: '#000',
  },
  flatListHistory: {
    marginTop: 20
  },
  rowModalHistory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dateModalHistory: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: colors.primary,
    textAlign: 'left'
  },
  andressModalHistory: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: colors.primary,
    textAlign: 'right'
  },
  descriptionModalHistory: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: colors.primary,
    textAlign: 'justify'
  },
  separatorModalHistory: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    borderBottomColor: '#8A8A8A',
    marginTop: 6,
    marginBottom: 10
  },
  modalPhoto: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  wrapperPhoto: {
    height: 450,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default styles;
