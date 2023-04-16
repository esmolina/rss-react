import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({});

export const manageStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
