import { Character } from '../RickAndMortyTypes';

export interface CartoonLittleCardProps {
  character: Character;
  cardClickHandler: (id: number) => void;
}
