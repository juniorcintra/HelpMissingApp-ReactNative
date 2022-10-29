import { createSlice } from '@reduxjs/toolkit';

const missingPersonSlice = createSlice({
  name: 'missingPerson',
  initialState: {
    missingPerson: {},
    missingPersons: [],
    missingPersonHistoric: [],
    missingPersonsHistoric: [],
    photosMissingPerson: [],
    missingPersonDetail: {},
    missingPersonsUser: [],
  },
  reducers: {
    setMissingPerson(state, { payload }) {
      state.missingPerson = payload;
    },
    setMissingPersons(state, { payload }) {
      state.missingPersons = payload;
    },
    setMissingPersonPhotos(state, { payload }) {
      state.photosMissingPerson = payload;
    },
    setMissingPersonHistoric(state, { payload }) {
      state.missingPersonsHistoric = payload;
    },
    setMissingPersonsHistoric(state, { payload }) {
      state.missingPersonsHistoric = payload;
    },
    setMissingPersonDetail(state, { payload }) {
      state.missingPersonDetail = payload;
    },
    setMissingPersonsUser(state, { payload }) {
      state.missingPersonsUser = payload;
    },
  },
});

export const {
  setMissingPerson,
  setMissingPersons,
  setMissingPersonPhotos,
  setMissingPersonHistoric,
  setMissingPersonsHistoric,
  setMissingPersonDetail,
  setMissingPersonsUser,
} = missingPersonSlice.actions;

export default missingPersonSlice.reducer;
