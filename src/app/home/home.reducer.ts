import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import subDays from 'date-fns/subDays';

type InitialStateType = {
  viewedDates: Date[];
  favourites: Date[];
};

export const initialState: InitialStateType = {
  viewedDates: [],
  favourites: [],
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
    addFavourite: (state, action: PayloadAction<Date>): void => {
      state.favourites = [...state.favourites, action.payload];
    },
  },
});
