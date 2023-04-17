import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APICharactersResponse } from '../../components/RickAndMortyPage/RickAndMortyTypes';

export const charactersAPI = createApi({
  reducerPath: 'api/characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getAllCharacters: build.query<APICharactersResponse, void>({
      query: () => ({ url: `/character` }),
    }),
    getSearchedCharacters: build.query<APICharactersResponse, string>({
      query: (request) => ({ url: `/character/?name=${request}` }),
    }),
    getSelectedCharacter: build.query<APICharactersResponse, number>({
      query: (id) => ({ url: `/character/${id}` }),
    }),
  }),
});

export const {
  useGetAllCharactersQuery,
  useGetSearchedCharactersQuery,
  useGetSelectedCharacterQuery,
} = charactersAPI;
