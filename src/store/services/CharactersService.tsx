import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  APICharactersResponse,
  Character,
} from '../../components/RickAndMortyPage/RickAndMortyTypes';

export const charactersAPI = createApi({
  reducerPath: 'api/characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getSearchedCharacters: build.query<APICharactersResponse, string>({
      query: (request) => (request.length ? `/character/?name=${request}` : '/character'),
    }),
    getSelectedCharacter: build.query<Character, number>({
      query: (id) => ({ url: `/character/${id}` }),
    }),
  }),
});

export const { useGetSearchedCharactersQuery, useGetSelectedCharacterQuery } = charactersAPI;
