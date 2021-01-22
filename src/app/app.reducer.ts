import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import homeReducer from './home/home.reducer';

const rootReducer: Reducer = combineReducers({
  home: homeReducer.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const localStorageState = localStorage.getItem('reduxState');
const preloadedState = localStorageState ? JSON.parse(localStorageState) : {};

export const createStore = () =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const store = createStore();

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default rootReducer;
