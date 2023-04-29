import { Character } from '../../../components/RickAndMortyPage/RickAndMortyTypes';

export interface ModalStateInterface {
  selectedCharacter: Character | null;
  isLoaded: boolean;
  error: string;
}
