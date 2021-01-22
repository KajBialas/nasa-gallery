import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import subDays from 'date-fns/subDays';

type InitialStateType = {
  currentDate: Date | null;
  viewedDates: Date[];
};

export const initialState: InitialStateType = {
  currentDate: null,
  viewedDates: [],
};

export default createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setNextDate: (state, action: PayloadAction<Date | undefined>): void => {
      if (state.viewedDates.length) {
        state.viewedDates = [
          subDays(new Date(state.viewedDates[0]), 1),
          ...state.viewedDates,
        ];
        return;
      }
      if (action.payload) {
        state.viewedDates = [action.payload];
      }
    },
  },
});