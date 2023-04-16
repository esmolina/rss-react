import { DispatchType } from '../storeTypes';
import axios from 'axios';
import { APICharactersResponse } from '../../components/RickAndMortyPage/RickAndMortyTypes';
import { SearchSlice } from './SearchSlice/SearchSlice';

export const fetchCharacters = (userRequest: string) => async (dispatch: DispatchType) => {
  try {
    dispatch(SearchSlice.actions.searchFetching());
    const response = await axios.get<APICharactersResponse | null>(
      `https://rickandmortyapi.com/api/character/?name=${userRequest}`
    );
    if (response.data) {
      dispatch(SearchSlice.actions.searchFetchingSuccess(response.data));
    }
    throw new Error(`${response.status}`);
  } catch (error) {
    dispatch(
      SearchSlice.actions.searchFetchingError(
        `Something went wrong about getting selected character: ${error}`
      )
    );
  }
};
