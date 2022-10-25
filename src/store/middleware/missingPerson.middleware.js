import { initLoading, endLoading, setError, setSuccess, unsetSuccess, unsetError } from '../slices/generics.slice';
import api from '../../services/api';
import { Alert } from 'react-native';
import { setMissingPerson, setMissingPersonPhotos } from '../slices/missingPerson.slice';

export const registerMissingPerson = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
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
      dispatch(endLoading());
      return response.data.success.data;
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const registerUploadPhoto = dataPhoto => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = await api.post('/desaparecidos/anexos', dataPhoto);
      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Anexo cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o histórico.' }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro! teste', error.message);
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
      response = await api.get(`/desaparecidos/get${dataMissingPerson}`);

      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(setMissingPerson(response.data.success.data[0]));
        dispatch(
          setSuccess({
            message: `Histórico cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o histórico.' }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const getMissingPersonPhoto = (dataMissingPerson = '') => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = null;
      response = await api.get(`/desaparecidos/get-anexos${dataMissingPerson}`);

      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(setMissingPersonPhotos(response.data.success.data));
        dispatch(
          setSuccess({
            message: `Histórico cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao cadastrar o histórico.' }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const registerHistoricMissingPerson = (dataHistoric, reload = true) => {
  return async dispatch => {
    if (reload) {
      dispatch(initLoading());
    }
    try {
      let response = await api.post('/desaparecidos/historico', dataHistoric);
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

      if (reload) {
        dispatch(endLoading());
      }
    } catch (error) {
      dispatch(unsetSuccess());
      Alert.alert('Erro!', error.message);
      console.log(error);

      if (reload) {
        dispatch(endLoading());
      }
    }
  };
};
