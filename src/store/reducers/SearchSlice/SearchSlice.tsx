import { SearchStateInterface } from './SearchSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APICharactersResponse } from '../../../components/RickAndMortyPage/RickAndMortyTypes';
import { fetchCharacters } from '../ActionCreators';

const initialState: SearchStateInterface = {
  searchRequest: '',
  searchResponse: null,
  isLoaded: false,
  error: '',
};

export const SearchSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending.type]: (state, action: PayloadAction<APICharactersResponse>) => {
      state.isLoaded = true;
    },
    [fetchCharacters.fulfilled.type]: (state, action: PayloadAction<APICharactersResponse>) => {
      state.isLoaded = false;
      state.error = '';
      state.searchResponse = action.payload;
    },
    [fetchCharacters.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoaded = false;
      state.error = action.payload;
    },
  },
});

export default SearchSlice.reducer;
