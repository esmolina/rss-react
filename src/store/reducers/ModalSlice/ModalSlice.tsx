import { ModalStateInterface } from './ModalSliceTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCharacter } from '../ActionCreators';
import { Character } from '../../../components/RickAndMortyPage/RickAndMortyTypes';

const initialState: ModalStateInterface = {
  selectedCharacter: null,
  isLoaded: false,
  error: '',
};

export const ModalSlice = createSlice({
  name: 'modalCharacter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.pending, (state) => {
      state.isLoaded = true;
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<Character>) => {
      state.isLoaded = false;
      state.error = '';
      state.selectedCharacter = action.payload;
    });
    builder.addCase(fetchCharacter.rejected, (state) => {
      state.isLoaded = false;
      state.error = 'error';
    });
  },
});

export default ModalSlice.reducer;
