import React from 'react';
import classNames from 'classnames/bind';
import styles from './CartoonCharactersPage.module.scss';
import { CartoonPageProps } from './CartoonCharactersPageTypes';
import { charactersAPI } from '../../../store/services/CharactersService';
import CartoonCardsList from '../CartoonCardsList/CartoonCardsList';

const cx = classNames.bind(styles);

function Exp({ handleGoAnotherChange }: CartoonPageProps) {
  const {
    data: fetchedCharacters,
    isLoading,
    error,
    refetch,
  } = charactersAPI.useGetSearchedCharactersQuery('morty');
  const cardHandler = () => {
    console.log('1');
  };
  return (
    <div className={cx('cartoon-page-wrapper')}>
      <button onClick={() => refetch()}>refetch</button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {fetchedCharacters && (
        <CartoonCardsList characters={fetchedCharacters.results} cardClickHandler={cardHandler} />
      )}
    </div>
  );
}

export default Exp;
