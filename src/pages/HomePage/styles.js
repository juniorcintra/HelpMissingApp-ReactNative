import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
  wrapperPhoto: {
    flex: 1,
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
  },
  wrapperInfo: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
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
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  infor: { borderColor: colors.infor, width: 50, height: 50 },
  sucess: { borderColor: colors.sucess },
});

export default styles;
