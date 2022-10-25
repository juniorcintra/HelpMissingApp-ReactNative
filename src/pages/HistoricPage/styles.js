import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#000',
    fontFamily: 'BethEllen-Regular',
    fontSize: 18,
    paddingLeft: 10,
  },
  headerLogo: {
    width: 30,
    height: 35,
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    width: '97%',
    borderColor: '#ccc',
  },
  wrapperPhoto: {
    height: 350,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  wrapperInfo: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  rowInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
    justifyContent: 'space-between',
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
  },
  rowTextBold: {
    fontFamily: 'Roboto-Bold',
  },
  rowTextRegular: {
    fontFamily: 'Roboto-Regular',
  },
  nameUser: {
    fontSize: fonts.textLogo,
    fontFamily: 'Roboto-Bold',
    paddingRight: 10,
  },
  ageUser: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
  },
  description: {
    width: '90%',
    fontSize: fonts.text,
    fontFamily: 'Roboto-Regular',
    textAlign: 'justify',
  },
  wrapperButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.secondary,
  },
  button: {
    padding: 8,
    marginHorizontal: 10,
    marginTop: 18,
    marginBottom: 20,
    borderRadius: 50,
    borderWidth: 2,
  },
  danger: { borderColor: colors.danger },
  infor: {
    borderColor: colors.infor,
    width: 100,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inforText: { color: colors.infor },
  sucess: { borderColor: colors.sucess },
  buttonInfo: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentModal: {
    width: '80%',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: colors.white,
  },
  TitleModal: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    color: '#000',
  },
  labelTextArea: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#000',
    marginTop: 16,
    paddingBottom: 10,
  },
  textInputArea: {
    width: '100%',
    minHeight: 84,
    textAlignVertical: 'top',
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(0, 0, 0,0.4)',

    fontSize: 16,
    color: colors.primary,
  },
  wrapperButtonModal: {
    paddingTop: 18,
    marginBottom: -20,
  },
  containerSelect: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  labelSelect: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#000',
  },
  rowSelect: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.4)',
  },
  textSelect: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#000',
    marginLeft: 5,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divButtonStatus: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonStatus: {
    width: 150,
    height: 30,
    borderRadius: 7,
    backgroundColor: '#FBAD40',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStatusButton: {
    fontWeight: 'bold',
  },

  containerFound: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  wrapperSearchFound: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputSearchFound: {
    width: '100%',
    paddingLeft: 35,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.4)',

    fontSize: 16,
    color: colors.primary,
  },
  iconSearchFound: {
    position: 'absolute',
    color: colors.primary,
    fontSize: 24,
  },
  containerCardFound: {
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
  photoFound: {
    width: 51,
    height: 51,
    marginRight: 12,
    borderRadius: 25,
  },
  descriptionFound: {
    flex: 2,
  },
  nameFound: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: 'Roboto-Bold',
  },
  ageFound: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
  foundOnFound: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
  dateFound: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'Roboto-Regular',
  },
});

export default styles;
