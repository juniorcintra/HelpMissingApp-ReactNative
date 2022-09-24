import { createSlice } from '@reduxjs/toolkit';

const genericsSlice = createSlice({
  name: 'generic',
  initialState: {
    loading: false,
    error: false,
    success: false,
  },
  reducers: {
    initLoading: state => {
      state.loading = true;
    },

    endLoading: state => {
      state.loading = false;
    },
    setError: {
      reducer(state, action) {
        state.error = action.payload.message;
      },
      prepare({ message }) {
        return { payload: { message } };
      },
    },

    unsetError: state => {
      state.error = false;
    },

    setSuccess: {
      reducer(state, action) {
        state.success = action.payload.message;
      },
      prepare({ message }) {
        return { payload: { message } };
      },
    },
    unsetSuccess: state => {
      state.success = false;
    },
  },
});

export const { initLoading, endLoading, setError, unsetError, setSuccess, unsetSuccess } = genericsSlice.actions;

export default genericsSlice.reducer;
