import { initLoading, endLoading, setError, setSuccess, unsetSuccess, unsetError } from '../slices/generics.slice';
import api from '../../services/api';
import { Alert } from 'react-native';
import {
  setMissingPerson,
  setMissingPersonHistoric,
  setMissingPersonsHistoric,
  setMissingPersonPhotos,
  setMissingPersons,
} from '../slices/missingPerson.slice';

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
      Alert.alert('Erro! Post Desaparecidos', error.message);
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
      Alert.alert('Erro! Post Fotos', error.message);
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
      Alert.alert('Erro! Get desaparecidos', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const getMissingPersonFound = () => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = null;
      response = await api.get(`/desaparecidos/get-encontrados`);

      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());

        dispatch(setMissingPersons(response.data.success.data));

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
      Alert.alert('Erro! Get Encontrados', error.message);
      console.log(error);
      dispatch(endLoading());
    }
  };
};

export const getMissingPersonPerHistoric = (dataMissingPerson = '') => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = null;
      response = await api.get(`/desaparecidos/get-por-historico${dataMissingPerson}`);

      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(setMissingPersonsHistoric(response.data.success.data));

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
      Alert.alert('Erro! Get por Historico', error.message);
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
      Alert.alert('Erro! Get Anexos', error.message);
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
      Alert.alert('Erro! Post Historico', error.message);
      console.log(error);

      if (reload) {
        dispatch(endLoading());
      }
    }
  };
};

export const getHistoricMissingPerson = (dataHistoric, reload = true) => {
  return async dispatch => {
    if (reload) {
      dispatch(initLoading());
    }
    try {
      let response = await api.get(`/desaparecidos/get-historico${dataHistoric}`);

      if (response.status === 200 || response.status === 201) {
        dispatch(unsetError());
        dispatch(setMissingPersonHistoric(response.data.success.data));
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
      Alert.alert('Erro! Get Historico', error.message);
      console.log(error);

      if (reload) {
        dispatch(endLoading());
      }
    }
  };
};
