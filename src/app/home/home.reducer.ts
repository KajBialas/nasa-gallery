import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  date: '',
};

export default createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<string>): void => {
      state.date = action.payload;
    },
  },
});
