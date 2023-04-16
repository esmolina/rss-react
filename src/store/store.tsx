import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice/SearchSlice';

export const rootReducer = combineReducers({
  searchReducer,
});

export const manageStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
