import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import homeReducer from './home/home.reducer';

const rootReducer: Reducer = combineReducers({
  home: homeReducer.reducer,
});

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export const store = createStore();

export default rootReducer;
