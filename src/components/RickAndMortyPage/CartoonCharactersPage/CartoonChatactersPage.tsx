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
  // ToDo remove
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  useEffect(() => {
    NetworkClient.getCharacters().then((charactersData: APICharactersResponse) => {
      setCharactersList(charactersData.results);
      setTimeout(() => setIsLoaded(true), 950);
    });
  }, []);

  const clickLittleCardHandler = (id: number) => {
    NetworkClient.getCharacters().then((charactersData: APICharactersResponse) => {
      setCharactersList(charactersData.results);
      const allCharacters = charactersData.results;
      const calledCharacter = allCharacters.find((item) => item.id === id);
      if (calledCharacter) {
        setSelectedCharacter(calledCharacter);
      }
      setTimeout(() => setIsLoaded(true), 950);
    });
    setShowModal(true);
  };

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher />
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
