import { initLoading, endLoading, setError, setSuccess, unsetSuccess, unsetError } from '../slices/generics.slice';
import api from '../../services/api';
import { Alert } from 'react-native';

export const registerMissingPerson = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      console.log('userdata', userData)
      let response = await api.post('/desaparecidos/cadastro', userData);
      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Desaparecido cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o desaparecido.' }));
      }
      console.log("cadastrou",response)

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert("Erro!", error.message)
      console.log(error)
      dispatch(endLoading());
    }
  };
};