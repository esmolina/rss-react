import axios from 'axios';
import { APICharactersResponse } from '../../components/RickAndMortyPage/RickAndMortyTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchfiltred',
  async (userRequest: string, thunkAPI) => {
    try {
      const response = await axios.get<APICharactersResponse>(
        `https://rickandmortyapi.com/api/character/?name=${userRequest}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Nothing was found for your query');
    }
  }
);
