import axios from 'axios';
import {
  APICharactersResponse,
  Character,
} from '../../components/RickAndMortyPage/RickAndMortyTypes';
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

export const fetchCharacter = createAsyncThunk(
  'character/fetchfiltred',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Some trouble with this character');
    }
  }
);
