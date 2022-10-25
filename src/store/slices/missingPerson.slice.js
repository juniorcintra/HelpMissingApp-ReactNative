import { createSlice } from '@reduxjs/toolkit';

const missingPersonSlice = createSlice({
  name: 'missingPerson',
  initialState: {
    missingPerson: {},
    missingPersons: [],
    photosMissingPerson: [],
    missingPersonHistoric: [],
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
      state.missingPersonHistoric = payload;
    },
  },
});

export const { setMissingPerson, setMissingPersons, setMissingPersonPhotos, setMissingPersonHistoric } =
  missingPersonSlice.actions;

export default missingPersonSlice.reducer;
