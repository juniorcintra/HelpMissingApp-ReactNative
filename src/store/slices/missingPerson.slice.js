import { createSlice } from '@reduxjs/toolkit';

const missingPersonSlice = createSlice({
  name: 'missingPerson',
  initialState: {
    missingPerson: {},
    missingPersons: [],
    photosMissingPerson: []
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
  },
});

export const { setMissingPerson, setMissingPersons, setMissingPersonPhotos } = missingPersonSlice.actions;

export default missingPersonSlice.reducer;
