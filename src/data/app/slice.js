import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  count: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCount() {},
    setCountSuccess(state, action) {
      state.count = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
