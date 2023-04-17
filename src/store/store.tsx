import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice/SearchSlice';
import { charactersAPI } from './services/CharactersService';

export const rootReducer = combineReducers({
  searchReducer,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

export const manageStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersAPI.middleware),
  });
};
