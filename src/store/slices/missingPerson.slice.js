import { createSlice } from '@reduxjs/toolkit';

const missingPersonSlice = createSlice({
  name: 'missingPerson',
  initialState: {
    missingPerson: {},
    missingPersons: [],
  },
  reducers: {
    setMissingPerson(state, { payload }) {
      state.missingPerson = payload;
    },
    setMissingPersons(state, { payload }) {
      state.missingPersons = payload;
    },
  },
});

export const { setMissingPerson, setMissingPersons } = missingPersonSlice.actions;

export default missingPersonSlice.reducer;
