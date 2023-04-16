import { SearchStateInterface } from './SearchSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APICharactersResponse } from '../../../components/RickAndMortyPage/RickAndMortyTypes';

const initialState: SearchStateInterface = {
  searchRequest: '',
  searchResponse: null,
  isLoaded: false,
  error: '',
};

export const SearchSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    searchFetching(state) {
      state.isLoaded = true;
    },

    //ToDO здесь обработка null?
    searchFetchingSuccess(state, action: PayloadAction<APICharactersResponse>) {
      state.isLoaded = false;
      state.error = '';
      state.searchResponse = action.payload;
    },
    searchFetchingError(state, action: PayloadAction<string>) {
      state.isLoaded = false;
      state.error = action.payload;
    },
  },
});

export default SearchSlice.reducer;
