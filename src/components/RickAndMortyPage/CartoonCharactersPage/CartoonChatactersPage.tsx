import React, { useEffect, useState } from 'react';
import { Character } from '../RickAndMortyTypes';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import { useAppDispatch, useAppSelector } from '../../../customHooks/reduxStoreHooks';
import { fetchCharacters } from '../../../store/reducers/ActionCreators';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';
import Loader from '../../Elements/Loader/Loader';
import NotFoundMessage from '../../NotFoundMessage/NotFoundMessage';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal') as HTMLDivElement;

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const dispatch = useAppDispatch();
  const { searchResponse, isLoaded, error } = useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(fetchCharacters('Morty'));
  }, []);

  const [charactersList, setCharactersList] = useState<Character[]>([]);
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoadedModal, setIsLoadedModal] = useState(false);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  const clickLittleCardHandler = (id: number) => {
    console.log('1');
  };

  // useEffect(() => {
  //   const inputSavedValue = localStorage.getItem('inputValue') || '';
  //   if (inputSavedValue) {
  //     NetworkClient.getFiltredForNameCharacters(inputSavedValue).then(
  //       (filtredCharacter: APICharactersResponse | null) => {
  //         if (!filtredCharacter) {
  //           setCharactersList([]);
  //           setTimeout(() => setIsLoaded(true), 950);
  //         }
  //         if (filtredCharacter) {
  //           setCharactersList(filtredCharacter.results);
  //           setTimeout(() => setIsLoaded(true), 950);
  //         }
  //       }
  //     );
  //   }
  //   if (!inputSavedValue) {
  //     NetworkClient.getCharacters().then((charactersData: APICharactersResponse) => {
  //       setCharactersList(charactersData.results);
  //       setTimeout(() => setIsLoaded(true), 950);
  //     });
  //   }
  // }, []);

  // const clickLittleCardHandler = (id: number) => {
  //   setIsLoadedModal(false);
  //   setShowModal(true);
  //   NetworkClient.getSelectedCharacter(id).then((selectedCharacter: Character) => {
  //     if (selectedCharacter) {
  //       setSelectedCharacter(selectedCharacter);
  //       setTimeout(() => setIsLoadedModal(true), 900);
  //     }
  //   });
  //   setShowModal(true);
  // };
  //
  // const submitSearchInput = (inputValue: string) => {
  //   setIsLoaded(false);
  //   NetworkClient.getFiltredForNameCharacters(inputValue).then(
  //     (filtredCharacter: APICharactersResponse | null) => {
  //       if (!filtredCharacter) {
  //         setCharactersList([]);
  //         setTimeout(() => setIsLoaded(true), 950);
  //       }
  //       if (filtredCharacter) {
  //         setCharactersList(filtredCharacter.results);
  //         setTimeout(() => setIsLoaded(true), 950);
  //       }
  //     }
  //   );
  // };

  return (
    <div className={cx('cartoon-page-wrapper')}>
      {/*<Searcher handleSubmitSearch={submitSearchInput} />*/}
      {/*{!isLoaded ? (*/}
      {/*  <Loader />*/}
      {/*) : (*/}
      {/*  <CartoonCardsList characters={charactersList} cardClickHandler={clickLittleCardHandler} />*/}
      {/*)}*/}
      {/*{showModal && selectedCharacter && portal && (*/}
      {/*  <ModalPortal*/}
      {/*    character={selectedCharacter}*/}
      {/*    setShowModal={setShowModal}*/}
      {/*    container={portal}*/}
      {/*    isLoadedModal={isLoadedModal}*/}
      {/*  />*/}
      {/*)}*/}

      {isLoaded && <Loader />}
      {error && <NotFoundMessage />}
      {searchResponse && (
        <CartoonCardsList
          characters={searchResponse.results}
          cardClickHandler={clickLittleCardHandler}
        />
      )}
    </div>
  );
}

export default CartoonPage;
