import { SearchStateInterface } from './SearchSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacters } from '../ActionCreators';
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
    setStoreSearchValue(state, action: PayloadAction<string>) {
      state.searchRequest = '' + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(
      fetchCharacters.fulfilled,
      (state, action: PayloadAction<APICharactersResponse>) => {
        state.isLoaded = false;
        state.error = '';
        state.searchResponse = action.payload;
      }
    );
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.isLoaded = false;
      state.error = 'error';
    });
  },
});

export default SearchSlice.reducer;
