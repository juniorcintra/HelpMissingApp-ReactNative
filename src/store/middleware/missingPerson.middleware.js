import { initLoading, endLoading, setError, setSuccess, unsetSuccess, unsetError } from '../slices/generics.slice';
import api from '../../services/api';
import { Alert } from 'react-native';
import { setMissingPersons } from '../slices/missingPerson.slice';

export const registerMissingPerson = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      console.log('userdata', userData);
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
      console.log('cadastrou', response);

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const getMissingPerson = (dataMissingPerson = '') => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = null;
      console.log('dataHistoric', dataMissingPerson);
      if (dataMissingPerson !== '') {
        response = await api.get(`/desaparecidos/get${dataMissingPerson}`);
      } else {
        response = await api.get('/desaparecidos/get');
      }
      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(
          setMissingPersons(response.data.success.data),
        );
        dispatch(
          setSuccess({
            message: `Histórico cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o histórico.' }));
      }
      console.log('cadastrou', response.data.success.data);

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const registerHistoricMissingPerson = dataHistoric => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      console.log('dataHistoric', dataHistoric);
      let response = await api.post('/desaparecidos/cadastro', dataHistoric);
      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Histórico cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o histórico.' }));
      }
      console.log('cadastrou', response);

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};
