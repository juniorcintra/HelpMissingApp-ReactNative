import { initLoading, endLoading, setError, setSuccess, unsetSuccess, unsetError } from '../slices/generics.slice';
import api from '../../services/api';
import { setUser } from '../slices/user.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registerUser = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = await api.post('/usuarios/cadastro', userData);
      if (response.status === 200 || response.status === 201) {
        dispatch(setUser({ user: response.data }));
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Usuário cadastrado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao carregar o usuário.' }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        }),
      );
      dispatch(endLoading());
    }
  };
};

export const login = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = await api.post('/usuarios/login', userData);
      if (response.status === 200 || response.status === 201) {
        await AsyncStorage.setItem('user', JSON.stringify({ user: true }));
        dispatch(setUser({ user: response.data }));
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Usuário logado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao carregar o usuário.' }));
      }

      dispatch(endLoading());
      return true;
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        }),
      );
      dispatch(endLoading());
      return false;
    }
  };
};

export const sendForgot = userData => {
  return async dispatch => {
    dispatch(initLoading());
    try {
      let response = await api.post('/usuarios/remember', userData);
      if (response.status === 200 || response.status === 201) {
        dispatch(setUser({ user: response.data }));
        dispatch(unsetError());
        dispatch(
          setSuccess({
            message: `Usuário logado com sucesso`,
          }),
        );
      } else {
        dispatch(setError({ message: 'Houve um ou mais erros ao carregar o usuário.' }));
      }

      dispatch(endLoading());
    } catch (error) {
      dispatch(unsetSuccess());
      dispatch(
        setError({
          message: error.message,
        }),
      );
      dispatch(endLoading());
    }
  };
};
