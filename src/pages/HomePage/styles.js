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
    marginHorizontal: 13,
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
});

export default styles;
