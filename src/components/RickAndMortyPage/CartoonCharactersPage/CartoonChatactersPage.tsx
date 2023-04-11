import React, { useEffect, useState } from 'react';
import { NetworkClient } from '../../../API/NetworkClient/NetworkClient';
import { APICharactersResponse, Character } from '../RickAndMortyTypes';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import Searcher from '../../Searcher/Searcher';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';
import ModalPortal from '../ModalPortal/ModalPortal';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal') as HTMLDivElement;

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  useEffect(() => {
    const inputSavedValue = localStorage.getItem('inputValue') || '';
    if (inputSavedValue) {
      NetworkClient.getFiltredForNameCharacters(inputSavedValue).then(
        (charactersData: APICharactersResponse | string) => {
          if (typeof charactersData === 'string') {
            setCharactersList([]);
            setTimeout(() => setIsLoaded(true), 950);
          }
          if (typeof charactersData !== 'string') {
            setCharactersList(charactersData.results);
            setTimeout(() => setIsLoaded(true), 950);
          }
        }
      );
    }
    if (!inputSavedValue) {
      NetworkClient.getCharacters().then((charactersData: APICharactersResponse) => {
        setCharactersList(charactersData.results);
        setTimeout(() => setIsLoaded(true), 950);
      });
    }
  }, []);

  const clickLittleCardHandler = (id: number) => {
    NetworkClient.getSelectedCharacter(id).then((selectedCharacter: Character) => {
      if (selectedCharacter) {
        setSelectedCharacter(selectedCharacter);
      }
    });
    setShowModal(true);
  };

  const submitSearchInput = (inputValue: string) => {
    setIsLoaded(false);
    NetworkClient.getFiltredForNameCharacters(inputValue).then(
      (filtredCharacter: APICharactersResponse) => {
        if (filtredCharacter) {
          setCharactersList(filtredCharacter.results);
          setTimeout(() => setIsLoaded(true), 950);
        }
      }
    );
  };

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher handleSubmitSearch={submitSearchInput} />
      {!isLoaded ? (
        <div>Is loaded...</div>
      ) : (
        <CartoonCardsList characters={charactersList} cardClickHandler={clickLittleCardHandler} />
      )}
      {isLoaded && showModal && selectedCharacter && portal && (
        <ModalPortal character={selectedCharacter} setShowModal={setShowModal} container={portal} />
      )}
    </div>
  );
}

export default CartoonPage;
