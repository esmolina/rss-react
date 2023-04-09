import React, { useEffect, useState } from 'react';
import { NetworkClient } from '../../../API/NetworkClient/NetworkClient';
import { APICharactersResponse, Character } from '../RickAndMortyTypes';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import Searcher from '../../Searcher/Searcher';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';

const cx = classNames.bind(styles);

function CartoonPage({ handleGoAnotherChange }: CartoonPageProps) {
  const [charactersList, setCharactersList] = useState<Character[]>([]);

  useEffect(() => {
    handleGoAnotherChange('API');
  });

  useEffect(() => {
    NetworkClient.getCharacters().then((charactersData: APICharactersResponse) => {
      setCharactersList(charactersData.results);
    });
  }, []);

  return (
    <div className={cx('cartoon-page-wrapper')}>
      <Searcher />
      <CartoonCardsList characters={charactersList} />
    </div>
  );
}

export default CartoonPage;
