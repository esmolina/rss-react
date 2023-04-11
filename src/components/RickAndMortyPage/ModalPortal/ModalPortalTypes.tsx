import { Character } from '../RickAndMortyTypes';
import React from 'react';

export interface ModalPortalProps {
  character: Character;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  container: HTMLDivElement;
  isLoadedModal: boolean;
}
