import { SearchStateInterface } from './SearchSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: SearchStateInterface = {
  searchRequest: '',
};

export const SearchSlice = createSlice({
  name: 'searcher',
  initialState,
  reducers: {
    setStoreSearchValue(state, action: PayloadAction<string>) {
      state.searchRequest = '' + action.payload;
    },
  },
});

export default SearchSlice.reducer;
