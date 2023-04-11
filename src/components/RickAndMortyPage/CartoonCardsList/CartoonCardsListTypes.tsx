import { Character } from '../RickAndMortyTypes';

export interface CartoonCardsListProps {
  characters: Array<Character>;
  cardClickHandler: (id: number) => void;
}
