import { APICharactersResponse } from '../../../components/RickAndMortyPage/RickAndMortyTypes';

export interface SearchStateInterface {
  searchRequest: string;
  searchResponse: APICharactersResponse | null;
  isLoaded: boolean;
  error: string;
}
