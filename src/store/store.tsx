import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/SearchSlice/SearchSlice';
import formReducer from './reducers/FormSlice/FormSlice';
import modalReducer from './reducers/ModalSlice/ModalSlice';
import { charactersAPI } from './services/CharactersService';

export const rootReducer = combineReducers({
  searchReducer: searchReducer,
  modalReducer: modalReducer,
  formReducer: formReducer,
  [charactersAPI.reducerPath]: charactersAPI.reducer,
});

export const manageStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(charactersAPI.middleware),
  });
};

export const store = manageStore();
