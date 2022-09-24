import axios from 'axios';

const api = axios.create({
  baseURL: 'https://helpmissing.herokuapp.com',
});

export default api;
