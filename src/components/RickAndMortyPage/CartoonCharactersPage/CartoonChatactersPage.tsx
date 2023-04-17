import React, { useEffect, useState } from 'react';
import { Character } from '../RickAndMortyTypes';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import { useAppDispatch, useAppSelector } from '../../../customHooks/reduxStoreHooks';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';
import Loader from '../../Elements/Loader/Loader';
import { charactersAPI } from '../../../store/services/CharactersService';
import Searcher from '../../Searcher/Searcher';
import { SearchSlice } from '../../../store/reducers/SearchSlice/SearchSlice';

const cx = classNames.bind(styles);
const portal = document.getElementById('portal') as HTMLDivElement;

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const dispatch = useAppDispatch();
  const { searchRequest } = useAppSelector((state) => state.searchReducer);
  const { setStoreSearchValue } = SearchSlice.actions;

  const { data: fetchedAllCharacters, isLoading } = charactersAPI.useGetAllCharactersQuery();

  const { data: fetchedSearchCharacters } = charactersAPI.useGetSearchedCharactersQuery(
    `${searchRequest}`
  );

  const [charactersList, setCharactersList] = useState<Character[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoadedModal, setIsLoadedModal] = useState(false);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  useEffect(() => {
    if (!searchRequest.length && fetchedAllCharacters) {
      setCharactersList(fetchedAllCharacters.results);
      setTimeout(() => setIsLoaded(true), 950);
    }
    if (searchRequest.length && fetchedSearchCharacters) {
      setCharactersList(fetchedSearchCharacters.results);
      setTimeout(() => setIsLoaded(true), 950);
    }
  });

  const clickLittleCardHandler = (id: number) => {
    console.log('1');
  };

  const CheckSearchValue = (testedValue: string) => {
    const { data: fetchedCharacters } = charactersAPI.useGetSearchedCharactersQuery(
      `${testedValue}`
    );

    if (testedValue) {
      if (fetchedCharacters) {
        setCharactersList(fetchedCharacters.results);
        setTimeout(() => setIsLoaded(true), 950);
      }

      if (!fetchedCharacters) {
        setCharactersList([]);
        setTimeout(() => setIsLoaded(true), 950);
      }
    }
    if (!testedValue) {
      const { data: fetchedCharacters } = charactersAPI.useGetAllCharactersQuery();
    }
  };

  const submitSearchInput = (inputValue: string) => {
    setIsLoaded(false);
    CheckSearchValue(inputValue);
  };

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
  // },
  //   []
  // );

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

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher handleSubmitSearch={submitSearchInput} />
      {isLoading ? (
        <Loader />
      ) : (
        <CartoonCardsList characters={charactersList} cardClickHandler={clickLittleCardHandler} />
      )}
      {/*{showModal && selectedCharacter && portal && (*/}
      {/*  <ModalPortal*/}
      {/*    character={selectedCharacter}*/}
      {/*    setShowModal={setShowModal}*/}
      {/*    container={portal}*/}
      {/*    isLoadedModal={isLoadedModal}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
}

export default CartoonPage;
